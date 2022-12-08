import React from 'react';
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from '../components/Scroll';
import './index.css';
import 'animate.css';
import { robots } from "../robots";
import ErrorBoundary from "../components/ErrorBoundary";
import { useEffect, useState } from "react";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');
    // const [count, setCount] = useState(0);
    // console.log(count)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => {setRobots(users)});
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    if (!robots.length) {
        return <h1>Loading</h1>
    } else {
        return(
            <div className="tc">
                <h1 className="f2 grow">RoboFriends</h1>
                {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
                <Searchbox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
};

export default App;