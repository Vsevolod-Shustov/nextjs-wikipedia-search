import { Suspense } from 'react';
import Form from './form'
import WikiPage from './wikiPage';

const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
let query = "test";

async function getData() {
    const res = await fetch(`${api + query}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

async function buildPagesList(data) {
    //const data = await getData();
    let pagesList = [];
    const pagesData = data.query.pages;
    console.log('buildPagesList: ' + pagesData[14892].title);
    for(const page in pagesData) {
        //console.log('pageData: ' + pageData);
        console.log('title: ' + pagesData[page].title);
        pagesList.push(<WikiPage page={pagesData[page]}></WikiPage>);
    }
    console.log('pagesList: ' + JSON.stringify(pagesList[0]));
    return pagesList;
}

export default async function Page() {
    const data = await getData();
    const pagesListToRender = buildPagesList(data);
    //console.log('Page: ' + data.query.pages[14892].title);

    return (
        <div>
            <Form />
            {pagesListToRender}
        </div>
    );
  }