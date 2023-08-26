'use client'

import { useState } from 'react'

const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
const cb = '&callback=JSON_CALLBACK';

export default function Form() {
    const [query, setQuery] = useState('')

    const handleChange = () => {}

    const callAPI = async () => {
        try {
            const res = await fetch(
                `${api + query}`);
            console.log(res);
            const data = await res.json();
            console.log(data.query.pages);
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