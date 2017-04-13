import React from "react";
import RegisterContainer from "../../js/containers/RegisterContainer";
import renderer from "react-test-renderer";

test('RegisterContainer should be rendered properly', () => {
    const rendered = renderer.create(
        <RegisterContainer />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});