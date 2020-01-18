import React, {useEffect, useState} from 'react';
import './App.css';

interface IProps {
    age: number
}

const AppHook: React.FC<IProps> = (props) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(props.age);
    }, [props.age])

    const counterPlus = () => {
        setCounter(counter + 1)
    }

    console.log('render AppHook');
    return (
        <div className="App">
            <div className='Counter'>{counter}; age: {props.age}</div>
            <div>
                <button onClick={counterPlus}>Inc</button>
            </div>
        </div>
    );
};

export default AppHook;
