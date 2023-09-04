'use client'

import { useState, useEffect } from "react"
import Form from "./form"
import WikiPagesList from "./wikiPagesList";

export default function ClientWrapper() {
    const [wrapperQuery, setWrapperQuery] = useState('')
    const [pagesData, setPagesData] = useState('')

    useEffect(() => {
        console.log("clientWrapper useeffect wrapperQuery: " + wrapperQuery)
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/api/data`)
            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await res.json()
            console.log("api: clientWrapper useeffect fetchData data.data.query.pages: ")
            console.log(data.data.query.pages)
            setPagesData(data.data)
        }
        fetchData()
    }, [wrapperQuery])

    return(
        <>
            <h2 className="text-2xl font-bold underline">client</h2>
            <Form setWrapperQuery={setWrapperQuery}></Form>
            <WikiPagesList data={pagesData}></WikiPagesList>
        </>
    )
}