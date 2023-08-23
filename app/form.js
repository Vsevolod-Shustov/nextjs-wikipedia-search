'use client'

import { useState } from 'react'
 
export default function Form() {
    const [query, setQuery] = useState('')

    const handleChange = () => {}

    const callAPI = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/${query}`);
            const data = await res.json();
            console.log(data);
         } catch (err) {
           console.log(err);
         }
     };
 
    return (
       <div>
            here be form

            <input value={query} onChange={e => setQuery(e.target.value)} name="query"></input>
            <button onClick={callAPI}>Make API call</button>
        </div>
    )
}