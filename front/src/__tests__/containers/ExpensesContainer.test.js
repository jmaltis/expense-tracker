import React from "react";
import ExpensesContainer from "../../js/containers/ExpensesContainer";
import renderer from "react-test-renderer";

test('ExpensesContainer should be rendered properly', () => {
    const rendered = renderer.create(
        <ExpensesContainer />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});