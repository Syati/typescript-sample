import * as React from 'react';

class Hello extends React.Component<Hello.Props, Hello.State> {
    render() {
        return <h1>Hello world</h1>;
    }
}

namespace Hello {
    export interface Props {
    }

    export interface State {
    }
}

export = Hello
