import React, { useEffect } from "react";
import getNews from "../Data/NewsData";
import { useState } from "react";
import NewsItem from "../component/NewsItem";

function ListNews() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    async function newsArticle() {
      const { news } = await getNews();
      setArticle(news.articles);
    }
    newsArticle();
  }, []);
  return (
    <div className="listNews gap-3">
      {article.map((item) => (
        <NewsItem
          key={item.id}
          title={item.title}
          author={item.author}
          description={item.description}
          url={item.url}
          urlImage={item.urlToImage}
          publishedAt={item.publishedAt}
        />
      ))}
    </div>
  );
}

// class ListNews extends React.Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             news : []
//         }
//     }

//     async componentDidMount(){
//         const {news} = await getNews();
//         this.setState(()=>{
//             return{
//                 news : news
//             }
//         })
//     }

//     render(){
//         const article = this.state.news.articles
//         return (
//             <>
//                 {/* {article.map((news)=>{
//                     <p>{news}</p>
//                 })} */}
//             </>
//         )
//     }
// }

export default ListNews;
