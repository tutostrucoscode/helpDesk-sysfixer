import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "@/features/loading/loading";
import { Path } from "@/constants";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import PrivateRoute from "@/features/routers/private-route";
import NotFound from "@/pages/not-found";
import { auth } from "@/config/supabase";
import Welcome from "@/pages/welcome";
import Test from "@/pages/test";

const AppRouters = () => {
  const [session, setSession] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getSessionUser = async () => {
      const session = (await auth.getSession()).data.session;
      console.log("getSession() : ", session);
      if (session) {
        setSession(true);
      }
      setIsLoading(false);
    };
    getSessionUser();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path={Path.Index}
            element={<Navigate to={Path.Home} replace={true} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Auth} element={<Login />} />
          <Route path={Path.Test} element={<Test />} />
          <Route element={<PrivateRoute canActivate={session} />}>
            <Route path={Path.Welcome} element={<Welcome />} />
            <Route path={Path.Dashboard} element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouters;
