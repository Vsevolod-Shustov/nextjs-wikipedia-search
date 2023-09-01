'use client'

import { useState, useEffect } from "react"
import Form from "./form"
import WikiPagesList from "./wikiPagesList";

const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
let query = "test";

export default function ClientWrapper() {
    const [wrapperQuery, setWrapperQuery] = useState('')
    const [pagesData, setPagesData] = useState('')

    // useEffect(() => {
    //     console.log("clientWrapper useeffect wrapperQuery: " + wrapperQuery)
    //     async function fetchData() {
    //         const res = await fetch(`${api + query}`)
    //         if (!res.ok) {
    //             throw new Error('Failed to fetch data')
    //         }
    //         const data = await res.json()
    //         console.log("clientWrapper useeffect data: ")
    //         console.log(data)
    //         console.log("clientWrapper useeffect data.query.pages: ")
    //         console.log(data.query.pages)
    //     }
    //     fetchData()
        
    // }, [wrapperQuery])

    useEffect(() => {
        console.log("clientWrapper useeffect wrapperQuery: " + wrapperQuery)
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/api/data`)
            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await res.json()
            // console.log("api: clientWrapper useeffect res: ")
            // console.log(res)
            // console.log("api: clientWrapper useeffect data: ")
            // console.log(data)
            console.log("api: clientWrapper useeffect fetchData data.data.query.pages: ")
            console.log(data.data.query.pages)
            //return data.data.query.pages
            setPagesData(data.data)
        }
        fetchData()
        console.log("api: clientWrapper useeffect pagesData: ")
        console.log(pagesData)
    }, [wrapperQuery])

    return(
        <>
            <h2 className="text-2xl font-bold underline">client</h2>
            <Form setWrapperQuery={setWrapperQuery}></Form>
            <WikiPagesList data={pagesData}></WikiPagesList>
        </>
    )
}