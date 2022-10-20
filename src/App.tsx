import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route index element={Formulario} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
