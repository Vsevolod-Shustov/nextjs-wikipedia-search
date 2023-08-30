'use client';

import WikiPage from "./wikiPage";

function buildPagesList(data) {
    let pagesList = [];
    const pagesData = data?.query?.pages;
    //console.log('buildPagesList: ' + pagesData[14892].title);
    for(const page in pagesData) {
        //console.log('pageData: ' + pageData);
        //console.log('buildPagesList: title: ' + pagesData[page].title);
        pagesList.push(<WikiPage key={pagesData[page].pageid} page={pagesData[page]}></WikiPage>);
    }
    //console.log('pagesList: ' + JSON.stringify(pagesList[0]));
    return pagesList;
}

export default function WikiPagesList(props) {
    const pagesToRender = buildPagesList(props.data)
    
    return(
        <>
            {pagesToRender}
        </>
    )
}