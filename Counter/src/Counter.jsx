import React, {useState} from 'react'

function Counter()
{
    const [count, setCount] = useState(0);

    function Increment()
    {
        setCount(count=>count+1);
    }

    function Reset()
    {
        setCount(0);
    }

    function Decrement()
    {
        setCount(count=>count-1);
    }

    return(
        <>
        <div>
            <p style={{fontSize: "xx-large;"}}>{count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
            
        </>
    );
}

export default Counter