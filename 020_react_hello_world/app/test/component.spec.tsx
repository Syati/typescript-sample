import * as React from 'react/addons';
import assert from 'power-assert';
import * as Hello from "../src/component";

const TestUtils = React.addons.TestUtils

function setup() {
    const component = TestUtils.renderIntoDocument(<Hello />);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Hello />)
    const output = renderer.getRenderOutput();

    return {
        output: output
    }
}

describe("Component", () => {
    it("should display 'Hello world'", () => {
        const { output } = setup();
        const children = output.props.children;

        assert.equal(children, 'Hello world');
    });
});
