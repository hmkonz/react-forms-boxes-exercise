import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

// smoke test
it("renders without crashing", function() {
    render(<Box />)
});

// snapshot test
it("matches snapshot", function() {
    const { asFragment} = render(<Box />);
    expect (asFragment()).toMatchSnapshot();
});