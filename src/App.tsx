
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";

const Home = lazy(() => import("./Home"));
const Reviy = lazy(() => import("./Reviy"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "revi",
        element: <Reviy />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<h1 className="text-center mt-72 text-3xl">Loading Page...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
