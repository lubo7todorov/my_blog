import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders under construction header", () => {
  render(<App />);
  const headerElement = screen.getByText(/under construction/i);
  expect(headerElement).toBeInTheDocument();
});
