import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Preloader } from "./Components/Preloader/Preloader";

const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const Create = lazy(() => import("./Pages/Create/Create"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create"
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
