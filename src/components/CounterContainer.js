import React, { Component } from 'react'
export default function ourFirstStore(WrappedComponent) {
    return class extends Component {
        state = {
            value: 0,
        };

        render() {
            return <WrappedComponent 
            value={store.getState().value}
            onIncrement={() => store.dispatch({ type: "INCREMENT" })}
            onDecrement={() => store.dispatch({ type: "DECREMENT" })}{...this.props} />;
        }
    };
}