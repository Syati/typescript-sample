import * as React from 'react';

import Parent from './Parent';
import GrandChild from './GrandChild';

class Child extends React.Component<Child.Props, Child.State> {
    context: Parent.ChildContext;
    
    static contextTypes: React.ValidationMap<Parent.ChildContext> = {
        name: React.PropTypes.string
    }
    
    render() {
        return (
            <div>
                From Child
                <p> Parent is {this.context.name}</p>
                <GrandChild />
            </div>
        );
    }
}

namespace Child {
    export interface Props { }
    export interface State { }
}

export default Child;
