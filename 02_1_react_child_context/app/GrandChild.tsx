import * as React from 'react';

import Parent from './Parent';

class GrandChild extends React.Component<GrandChild.Props, GrandChild.State> {
    context: Parent.ChildContext;
    
    static contextTypes: React.ValidationMap<Parent.ChildContext> = {
        name: React.PropTypes.string
    }
    
    render() {
        return (
            <div>
                From GrandChild
                <p> Grandparent is {this.context.name}</p>
            </div>
        );
    }
}

namespace GrandChild {
    export interface Props { }
    export interface State { }
}

export default GrandChild;
