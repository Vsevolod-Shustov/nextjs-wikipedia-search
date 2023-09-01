'use client'

import { useState } from "react"
import Form from "./form"

export default function ClientWrapper() {
    const [wrapperQuery, setWrapperQuery] = useState('')

    return(
        <>
            <h2 className="text-2xl font-bold underline">client</h2>
            <Form setWrapperQuery={setWrapperQuery}></Form>
        </>
    )
}