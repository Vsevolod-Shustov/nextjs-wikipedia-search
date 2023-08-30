'use client'

import { useState } from 'react'

export default function Form(props) {
    const [inputQuery, setInputQuery] = useState('')
    //console.log("Form: setWrapperQuery:" + props.setWrapperQuery)

    const handleInputChange = (e) => {
        setInputQuery(e.target.value)
    }

    const handleButtonClick = () => {
        props.setWrapperQuery(inputQuery)
    }

    return (
       <div>
            <div>
                <input value={inputQuery} onChange={e => handleInputChange(e)} name="query"></input>
                <button onClick={handleButtonClick}>Search</button>
            </div>
        </div>
    )
}