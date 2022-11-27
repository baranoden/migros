/* eslint-disable */
import Router from "./router/routes";
import "./App.scss";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster />
      <Router />
    </>
  );
};

export default App;
