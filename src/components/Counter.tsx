import React, {useState} from 'react';

interface Props {
    
}
interface State {
  counter: number;
}

export class Counter extends React.Component<Props, State> {
  state: State = {
    counter: 0
  };
  onIncrement = (): void => {
    this.setState(
      ({ counter }) => ({ counter: counter + 1 })
    );
  }
  onDecrement = (): void => {
    this.setState(
      ({ counter }) => ({ counter: counter - 1 })
    );
  }
  render() {
    const { onIncrement, onDecrement } = this;
    return (
      <div className = "Counter">
        <h1>Counter</h1>
        <h3>{this.state.counter}</h3>
        <button type="button" onClick={onIncrement}>+</button>
        <button type="button" onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export function Counter2() {
    const [count, setCount] = useState(0);

    return (
        <div className = "Counter">
            <h1>Counter2</h1>
            <p>You clicked {count} times!</p>
            <button onClick={() => setCount(count+1)}>
                Click me
            </button>
        </div>
    )
}