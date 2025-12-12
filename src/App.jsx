import Home from "pages/Home";
import SuccessionMatrixV1 from "pages/SuccessionMatrixV1";
import SuccessionMatrixV2 from "pages/SuccessionMatrixV2";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/v1"
          element={<SuccessionMatrixV1 />}
        />
        <Route
          path="/v2"
          element={<SuccessionMatrixV2 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
