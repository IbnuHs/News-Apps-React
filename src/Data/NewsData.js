import React from "react";  
const Url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=054e292abfa2452ab0fb770eae440160';
const UrlIndo = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=054e292abfa2452ab0fb770eae440160';

async function getNews() {
    const response = await fetch(Url);
    const data = await response.json()

    return {news : data}
}
export default getNews;