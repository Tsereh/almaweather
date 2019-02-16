import React from "react";
import { SearchField } from "./SearchField";
import { shallow, mount } from "enzyme";

describe("SearchField.handleUserInput", () => {
    it("should call a function passed to it as onChange param, with event.target.value object as param", () => {
        // Parent components function that is passed to SearchField as param, and gets a new value from SearchField.handleUserInput
        let value = "";
        function mockFunction(newVal) {
            value = newVal;
        }
        const searchField = shallow(<SearchField onChange={mockFunction}/>);
        const mockEvent = { target: { value: "typed text"}};
        searchField.instance().handleUserInput(mockEvent);

        expect(value).toBe("typed text");
    });

    it("should set SearchField.state.userInputs value to match event.target.value passed to it", () => {
        function mockFunction(newVal) {
        }
        const searchField = shallow(<SearchField onChange={mockFunction}/>);
        expect(searchField.state().userInput).toBe("");
        const mockEvent = { target : { value: "typed text"}};
        searchField.instance().handleUserInput(mockEvent);
        const mockEvent2 = { target : { value : "typed text to be new state"}};
        searchField.instance().handleUserInput(mockEvent2);

        expect(searchField.state().userInput).toBe("typed text to be new state")
    });
});