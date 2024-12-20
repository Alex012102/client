import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./App.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Root />);
