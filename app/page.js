import { Suspense } from 'react';
import Form from './form'
import WikiPage from './wikiPage';
import WikiPagesList from './wikiPagesList';
import ClientWrapper from './clientWrapper';

const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
let query = "test";

let pagesListToRender = [
  <WikiPage page={{title: "test title 1"}}></WikiPage>,
  <WikiPage page={{title: "test title 2"}}></WikiPage>,
  <WikiPage page={{title: "test title 3"}}></WikiPage>
]

async function getData() {
  const res = await fetch(`${api + query}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

// async function getData() {
//   const res = await fetch(`http://localhost:3000/api/data`)
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   console.log("page.js getData res:")
//   console.log(res)
//   return res
// }


export default async function Page() {
    const data = await getData();

    return (
        <div>
            <div>
              <h2 className="text-2xl font-bold underline">server</h2>
              <WikiPagesList data={data}></WikiPagesList>
            </div>
            <div>
              <h2>client</h2>
              <ClientWrapper></ClientWrapper>
            </div>
        </div>
    );
  }

export const metadata = {
  title: 'nextjs-wikipedia-search',
}