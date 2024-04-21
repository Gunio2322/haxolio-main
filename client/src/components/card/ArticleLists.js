import React, { useEffect, useState } from 'react'
import styles from './blog.module.css'
import ArticleOverview from './ArticleOverview'
import { IntroFixedCol } from './IntroFixeCol'
import { DataNotFound } from '../handler/handler.component'
import { Link } from 'react-router-dom'

import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import Loading from '../animations/loading.component'


function ArticleLists() {
    const [articles, setArticles] = useState([]);
    const [paginator, setPaginator] = useState([]);

    const pagination_handler = (url) =>{
      // setArticles([]); // to trigger loading screen
      fetch.get(url)
      .then((res) => {
          setArticles(res.data.results);
          const buffer = {
              next: res.data.next,
              previous: res.data.previous,
              entries: res.data.count
          }
          setPaginator(buffer);
      })
  }
   
    
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/api/getPosts`);
      const json = await response.json();
      // console.log(response)
      setArticles(json);
    };
  
    useEffect(() => {
  
  
      // console.log(data.slug)
      fetchData();
    }, []);
  
    return (
      <IntroFixedCol>

          { articles === null? <DataNotFound/>: <></>}

          <div style={{maxWidth:"80%", display:"grid"}}>
              {   articles ? 
                  articles.map((articles) => {    
                      return (
                        <ArticleOverview key={articles._id} 
                        article={articles}
                        />
                        
                      )
         
                      
                      ///donest have stable id


                      
                  })
                  :
                  <></>
              }
          </div>

          {
              paginator ? 
              <div style={{display:"flex"}}>
                  {paginator.previous ? <button className={styles.button} onClick={()=>{pagination_handler(paginator.previous);}}><CgPlayTrackPrev size={20}/>PREV</button> : <></>}
                  {paginator.next ? <button className={styles.button} onClick={()=>{pagination_handler(paginator.next);}}>NEXT<CgPlayTrackNext size={20}/></button> : <></>}
              </div>
              :
              <></>
          }
      </IntroFixedCol>
  )
}
  export default ArticleLists;
  
