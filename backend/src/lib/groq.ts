import dotenv from "dotenv";
dotenv.config();

/**
 * Calls Groq API to choose the next move in the game.
 * Falls back to a random legal move if any error occurs or if the response is not a legal move.
 */
export async function getGroqChessMove(
  fen: string,
  lastMoves: string[],
  legalMoves: string[]
): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;
  const modelName = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

  if (!apiKey) {
    console.error("GROQ_API_KEY is not defined in environment variables. Falling back to random move.");
    return getRandomMove(legalMoves);
  }

  const systemPrompt = `You are a strong chess engine playing as Black.
Choose exactly one legal move from the provided list.
Reply with only the move text from the list.
Do not include JSON, markdown, explanations, punctuation, or any extra words.
If you must write any explanation or reasoning, you MUST wrap your final selected move in <move> and </move> tags, for example: <move>Nf3</move>.`;

  const userPrompt = `Current board state (FEN): ${fen}
Last moves in the game: ${lastMoves.join(", ")}
List of legal moves you can choose from: ${JSON.stringify(legalMoves)}

Which move do you play? Return only one exact move from the list.`;

  const attempts = 3;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: modelName,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.2 + (attempt - 1) * 0.1,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Attempt ${attempt} failed. Groq API error: ${response.status} - ${errorText}`);
        if (attempt < attempts) {
          await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
          continue;
        }
        break;
      }

      const data = (await response.json()) as any;
      const contentText = data.choices?.[0]?.message?.content;
      if (!contentText) {
        console.error(`Attempt ${attempt} returned empty content. Full response data:`, JSON.stringify(data));
        if (attempt < attempts) {
          await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
          continue;
        }
        break;
      }

      const chosenMove = extractMove(contentText, legalMoves);
      if (chosenMove) {
        console.log(`Groq AI selected move: ${chosenMove} (Attempt ${attempt})`);
        return chosenMove;
      }

      console.warn(`Attempt ${attempt} returned invalid move: "${contentText}". Raw response data:`, JSON.stringify(data));
      if (attempt < attempts) {
        await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
      }
    } catch (error) {
      console.error(`Attempt ${attempt} caught exception:`, error);
      if (attempt < attempts) {
        await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
      }
    }
  }

  return getRandomMove(legalMoves);
}

function extractMove(contentText: string, legalMoves: string[]): string | null {
  const trimmed = contentText.trim();

  // 1. Direct exact match
  if (legalMoves.includes(trimmed)) {
    return trimmed;
  }

  // 2. Extract from <move> tags if present
  const tagMatch = contentText.match(/<move>\s*(\S+)\s*<\/move>/i);
  if (tagMatch && tagMatch[1]) {
    const extracted = tagMatch[1].trim();
    if (legalMoves.includes(extracted)) {
      return extracted;
    }
  }

  // 3. Fallback: tokenize and search from the end (preferring the final move)
  const sanitized = trimmed
    .replace(/[`"'*.]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const tokens = sanitized.split(" ").filter(Boolean);

  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];
    if (token && legalMoves.includes(token)) {
      return token;
    }
  }

  return null;
}

function getRandomMove(legalMoves: string[]): string {
  if (legalMoves.length === 0) return "";
  const randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)] || "";
  console.log(`Fallback triggered. Selected random move: ${randomMove}`);
  return randomMove;
}
