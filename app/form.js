'use client'

import { useState, useEffect, Suspense } from 'react'
import WikiPage from './wikiPage';

const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
const cb = '&callback=JSON_CALLBACK';

export default function Form() {
    const [query, setQuery] = useState('')
    const [pages, setPages] = useState(null)

    const callAPI = async () => {
        try {
            const res = await fetch(`${api + query}`);
            console.log(res);
            const data = await res.json();
            //const pages = data.query.pages;
            setPages(await data.query.pages);
            //console.log(wikiPages);
        } catch (err) {
            console.log(err);
        }
    };

    let elementsToRender = []

    const makeElements = function(p) {
        let elements = [];
        for(const page in p) {
            elements.push(<div>page.pageid</div>)
        }
        console.log(elements);
        return elements;
    }

    useEffect(() => {
        elementsToRender = makeElements(pages)
    }, [pages])
    
    console.log(pages);
    console.log(elementsToRender);
    return (
       <div>
            <div>
                <input value={query} onChange={e => setQuery(e.target.value)} name="query"></input>
                <button onClick={callAPI}>Search</button>
            </div>
            <WikiPage></WikiPage>
            
            {elementsToRender}
        </div>
    )
}