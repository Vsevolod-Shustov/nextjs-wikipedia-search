'use client'

import { useState, useEffect, Suspense } from 'react'
import WikiPage from './wikiPage';



export default function Form() {
    const [query, setQuery] = useState('')

    return (
       <div>
            <div>
                <input value={query} onChange={e => setQuery(e.target.value)} name="query"></input>
                <button>Search</button>
            </div>
        </div>
    )
}