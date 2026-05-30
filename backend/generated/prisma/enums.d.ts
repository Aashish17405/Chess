export declare const GameColor: {
    readonly WHITE: "WHITE";
    readonly BLACK: "BLACK";
};
export type GameColor = (typeof GameColor)[keyof typeof GameColor];
export declare const GameStatus: {
    readonly WAITING: "WAITING";
    readonly ACTIVE: "ACTIVE";
    readonly COMPLETED: "COMPLETED";
    readonly ABANDONED: "ABANDONED";
};
export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus];
export declare const MoveResult: {
    readonly NORMAL: "NORMAL";
    readonly CAPTURE: "CAPTURE";
    readonly CHECK: "CHECK";
    readonly CHECKMATE: "CHECKMATE";
    readonly STALEMATE: "STALEMATE";
    readonly DRAW: "DRAW";
};
export type MoveResult = (typeof MoveResult)[keyof typeof MoveResult];
//# sourceMappingURL=enums.d.ts.map