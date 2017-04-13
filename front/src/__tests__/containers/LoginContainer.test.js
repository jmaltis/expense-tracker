import React from "react";
import LoginContainer from "../../js/containers/LoginContainer";
import renderer from "react-test-renderer";

test('LoginContainer should be rendered properly', () => {
    const rendered = renderer.create(
        <LoginContainer />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});