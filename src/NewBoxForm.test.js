import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// smoke test
it("renders without crashing", function() {
    render(<NewBoxForm/>)
});

// snapshot test
it("matches snapshot", function() {
    const { asFragment} = render(<NewBoxForm />);
    expect (asFragment()).toMatchSnapshot();
});

