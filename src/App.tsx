import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from "./pages/Configuracao";
import Sorteio from "./pages/Sorteio";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route index element={<Configuracao />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
