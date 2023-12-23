import Head from "../component/head.js"
import Links from "../component/links.js"
import Abstract from "../component/abstract.js"
import Module from "../component/module.js"
import Vdo from "../component/vdo.js"
import Ref from "../component/ref.js"

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function Main() {
  return (
    <div>
      <BrowserRouter>
      <Head />
      <Links />
      <Abstract />
      <Module />
        <Routes>
          <Route path="/vdo" element={<Vdo />} />
        </Routes>
        <Outlet />
      <Ref />
      </BrowserRouter>
    </div>
  );
}

export default Main;
