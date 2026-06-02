import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/RequireAuth";
import { LandingPage } from "./pages/Landingpage";
import { Game } from "./pages/Game";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<Navigate to="/game" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
