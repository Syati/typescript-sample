import * as React from 'react';

class Counter extends React.Component<any, any> {
    render() {
        const { increment, decrement, counter} = this.props;

        return (
            <p>
                Clicked: {counter}
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </p>
        );
    }
}

namespace Counter {
    export interface Props {}

    export interface State {}
}

export default Counter;



