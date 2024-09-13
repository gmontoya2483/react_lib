import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage({initialCount}) {

    const {count, increment} = useCounter(initialCount,true);


    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>Count</Button>
        </div>
    );
}


export default CounterPage;
