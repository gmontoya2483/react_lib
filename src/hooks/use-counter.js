import {useEffect, useState} from "react";

function useCounter(initialCount, log=false) {

    const [count, setCounter] = useState(initialCount);

    useEffect(() => {
        if(log) {
            console.log(count)
        }
    }, [count]);

    const handleClick = () => {
        setCounter(count + 1);
    }


    return {
        count,
        increment: handleClick
    }
}

export default useCounter;
