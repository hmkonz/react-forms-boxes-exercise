import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
it("renders without crashing", function() {
    render (<BoxList />);
});

// Snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect (asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
    const {getByLabelText, queryByText, getByPlaceholderText} = render (<BoxList />);

    // get the input values of Height, Width and Background Color as well as the button from the form
    const heightInput = getByLabelText("Height");
    const widthInput = getByLabelText("Width");
    const backgroundInput = getByLabelText("Background Color");
    const button = queryByText("Add a new box!");

    // no boxes added yet so confirm there isn't a button with an "X" which is added with every box
    expect(queryByText("X")).not.toBeInTheDocument();

    // Add a box (by mock filling out the form)
    // Mocks what will be filled out in the backgroundInput, widthInput and heightInput inputs of the form and updates the state of "boxes"
    fireEvent.change(backgroundInput, { target: { value: "Blue" } });
    fireEvent.change(widthInput, { target: { value: "5" } });
    fireEvent.change(heightInput, { target: { value: "5" } });
    //mocks submitting the button 
    fireEvent.click(button);

    // when box is added, expect to see button with an 'X" on it
    expect(queryByText("X")).toBeInTheDocument();
  
    // after box is added, inputs are cleared and expect to see placeholders in inputs
    const heightPlaceholder = getByPlaceholderText("Height");
    expect(heightPlaceholder).toBeInTheDocument();
});

it("can remove a box", function() {
    const {getByLabelText, queryByText} = render (<BoxList />);

    // get the inputs of Height, Width and Background Color as well as the button from the form
    const heightInput = getByLabelText("Height");
    const widthInput = getByLabelText("Width");
    const backgroundInput = getByLabelText("Background Color");
    const button = queryByText("Add a new box!");

    // add a box (by mock filling out the form)
    fireEvent.change(backgroundInput, { target: { value: "Blue" } });
    fireEvent.change(widthInput, { target: { value: "5" } });
    fireEvent.change(heightInput, { target: { value: "5" } });
    //mocks submitting the button 
    fireEvent.click(button);

    // click the remove button ('X') and the box should be gone
    fireEvent.click(queryByText("X"));
    expect(queryByText("X")).not.toBeInTheDocument();

});


