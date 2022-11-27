import React from "react";
import { Routes, Route } from "react-router-dom";
import Onboard from "../app/views/onboard";
import Mkonboard from "../app/views/onboard/mkolay/mkonboard";
import Mkaboutus from "../app/views/onboard/mkolay/mkaboutus";
import Mkhistory from "../app/views/onboard/mkolay/mkhistory";
import Mkqrcode from "../app/views/onboard/mkolay/mkqrcode";
import Mkvalidation from "../app/views/onboard/mkolay/mkvalidation";
import Layout from "../layout/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Onboard />} />
        <Route path="*" element={<Onboard />} />
        <Route path="/mkolay/onboard" element={<Mkonboard />} />
        <Route path="/mkolay/aboutus" element={<Mkaboutus />} />
        <Route path="/mkolay/history" element={<Mkhistory />} />
        <Route path="/mkolay/qrcode" element={<Mkqrcode />} />
        <Route path="/mkolay/mkvalidation" element={<Mkvalidation />} />
      </Route>
    </Routes>
  );
};
export default Router;
