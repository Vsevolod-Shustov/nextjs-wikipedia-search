'use client'

import { useState } from 'react'

export default function Form(props) {
    const [inputQuery, setInputQuery] = useState('')
    //console.log("Form: setWrapperQuery:" + props.setWrapperQuery)

    const handleInputChange = (e) => {
        setInputQuery(e.target.value)
    }

    const updateWrapperQuery = () => {
        props.setWrapperQuery(inputQuery)
    }

    const handleInputKeyPress = (e) => {
        if(e.code==="Enter") {
            props.setWrapperQuery(inputQuery)
        }
    }

    return (
       <div>
            <div>
                <input
                    value={inputQuery}
                    onChange={e => handleInputChange(e)}
                    name="query"
                    onKeyDown={e => handleInputKeyPress(e)}
                    className='border rounded'>
                </input>
                <button onClick={updateWrapperQuery}>Search</button>
            </div>
        </div>
    )
}