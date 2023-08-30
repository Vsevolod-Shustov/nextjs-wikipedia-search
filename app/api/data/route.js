import { NextResponse } from 'next/server'

const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
let query = "test";

export async function GET() {
    const res = await fetch(`${api + query}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    console.log("route.js data: ")
    console.log(data)

    console.log("NextResponse.json({ data }): ")
    console.log(NextResponse.json({ data }))
 
  return NextResponse.json({ data })
}