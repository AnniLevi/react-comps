import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

// how useReducer works
// we call a dispatch any time we want to update the peace of state
// if we put in any arguments to dispatch, they'll be shown up as the second argument to reducer - 'action'
// the first argument of reducer is always an existing state (object)
// whatever reducer returns is going to be the brand new state for component
// reducer function never uses async await and never makes any requests and has any promises
// and outside variables that are defined somewhere else inside the file and  changing over time

// the set of strings to pass into the action object as a type
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  // the second argument 'action' is an action object - {type: ..., payload: ...}
  // whatever gets returned will be the new state

  // if (action.type === INCREMENT_COUNT) {
  //   return { ...state, count: state.count + 1 };
  // }
  // if (action.type === SET_VALUE_TO_ADD) {
  //   return { ...state, valueToAdd: action.payload };
  // }
  // return state;

  // likewise
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      // return state;
      // OR
      throw new Error("unexpected action type: " + action.type);
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // dispatch should pass the action object - {type: ..., payload (optional): ...}
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
