import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Daftar from "./page/Daftar";
import SendTele from "./page/SendTele";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<Home />} />
          <Route path="daftar" element={<Daftar />} />
          <Route path="sendTele/:email/:password" element={<SendTele />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
