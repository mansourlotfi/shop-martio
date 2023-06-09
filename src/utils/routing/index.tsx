import { memo, Suspense, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes, IRoute } from "common/configs/routesConfig";
import Layout from "components/layout";
import RequireAuth from "./RequireAuth";
import ShoppingCard from "components/layout/shoppingCard";

export default memo((): any => {
  const generateRoute = useCallback((route: IRoute, key: number) => {
    if (route?.element)
      if (route.isPrivate) {
        return (
          <Route key={key} element={<Layout />}>
            <Route
              path={route.path}
              key={key}
              element={
                <RequireAuth>
                  <route.element />
                </RequireAuth>
              }
            />
          </Route>
        );
      } else
        return (
          <Route key={key} element={<Layout />}>
            <Route key={key} path={route.path} element={<route.element />} />
          </Route>
        );
    return <Fragment key={key} />;
  }, []);

  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          {routes &&
            routes.map((route: IRoute, index: number) => {
              if (route?.children?.length) {
                return route.children.map((child: IRoute) => {
                  return generateRoute(child, index);
                });
              } else return generateRoute(route, index);
            })}
        </Routes>
        <ShoppingCard />
      </BrowserRouter>
    </Suspense>
  );
});
