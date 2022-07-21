import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketches/sketch";

export default function App() {
  return <ReactP5Wrapper sketch={sketch} />;
}