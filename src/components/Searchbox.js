import React from "react";
import 'animate.css';

const Searchbox = ({searchChange}) => {
    return(
        <div className='pa2 grow'>
            <input 
            className="pa3 ba b--green bg-lightest-blue" 
            type='search' 
            placeholder='search robots'
            onChange={searchChange}
            onPointerEnter= 'animate__animated animate__bounce'
            />
        </div>
    );
}

export default Searchbox;