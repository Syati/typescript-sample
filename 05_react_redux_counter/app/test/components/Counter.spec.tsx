import * as React from 'react/addons';
import Counter from '../../src/components/Counter';

const TestUtils = React.addons.TestUtils

function setup(){
    const component = TestUtils.renderIntoDocument(<Counter/>)
    return {
        component: component
    }
}

describe("Counter component", () => {
    it("should display count", () => {
    });
    
});
