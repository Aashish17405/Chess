import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export const RequireAuth = () => {
  const location = useLocation();
  const [session, setSession] = useState<
    | Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"]
    | null
    | undefined
  >(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4 text-sm text-slate-300">
          Checking your session...
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return <Outlet />;
};
