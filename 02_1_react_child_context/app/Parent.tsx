import * as React from 'react';

import Child from './Child';

class Parent extends React.Component<Parent.Props, Parent.State>
    implements React.ChildContextProvider<Parent.ChildContext> {
        
    static childContextTypes: React.ValidationMap<Parent.ChildContext> = {
        name: React.PropTypes.string
    }
    
    getChildContext() {
        return {name: "Parent"}
    }
    
    render() {
        return (
            <div>
                <Child />
            </div>
        );
    }
}

namespace Parent {
    export interface Props {}
    export interface State {}
    export interface ChildContext {
        name: string
    }
}

export default Parent
