import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Preloader } from "./Components/Preloader/Preloader";
import './Pages/Create/create.scss'
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const Templates = lazy(() => import("./Pages/Templates/Templates"));
const Create = lazy(() => import("./Pages/Create/Create"));
const Home = lazy(() => import("./Pages/Home/Home"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/templates"
          element={
            <Suspense fallback={<Preloader />}>
              <Templates />
            </Suspense>
          }
        />
        <Route path="/create/:name"
          element={
            <Suspense fallback={<Preloader />}>
              <Create />
            </Suspense>
          }
        />
        <Route path="*"
          element={
            <Suspense fallback={<Preloader />}>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
