'use client'

import { useState } from "react"
import Form from "./form"

export default function ClientWrapper() {
    const [wrapperQuery, setWrapperQuery] = useState('')

    return(
        <>
            <p>client</p>
            <Form setWrapperQuery={setWrapperQuery}></Form>
        </>
    )
}