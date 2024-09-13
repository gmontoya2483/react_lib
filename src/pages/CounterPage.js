import Button from "../components/Button";
import useCounter from "../hooks/use-counter";
import {useReducer, useState} from "react";
import Panel from "../components/Panel";


const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'submit';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            // throw new Error(`unexpected action type: ${action.type}`)
            return state;
    }
}


function CounterPage({initialCount}) {

    // const {count, increment} = useCounter(initialCount,true);

    // const [count, setCount]= useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    console.log(state);

    const increment = () => {
        // setCount(count + 1);
        dispatch({type: INCREMENT_COUNT});
    }

    const decrement = () => {
        // setCount(count - 1);
        dispatch({type: DECREMENT_COUNT});
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
        // setValueToAdd(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        });
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    }


    return (
        <Panel className="m-3">
            <h1 className="text-lg mb-3">Count is {state.count}</h1>
            <div className="flex flex-row gap-5">
                <Button onClick={decrement}>Decrement</Button>
                <Button onClick={increment}>Increment</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    type="number"
                    onChange={handleChange}
                    value={state.valueToAdd ||""}
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}


export default CounterPage;
