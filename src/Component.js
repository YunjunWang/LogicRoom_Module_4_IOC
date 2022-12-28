import React from "react";
import { render } from "react-dom";
import { container } from "./Container";
import { presenter } from "./Presenter";

function App() {
  const viewModel = presenter.load();
  return <>{viewModel.message}</>;
}

container.mode = "real";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
