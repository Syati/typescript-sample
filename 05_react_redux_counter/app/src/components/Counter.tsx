import * as React from 'react';

class Counter extends React.Component<any, any> {
    render() {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;

        return (
            <p>
                Clicked: {counter}
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={incrementIfOdd}>Increment if odd</button>
                <button onClick={() => incrementAsync()}>Increment async</button>
            </p>
        );
    }
}

export default Counter;



