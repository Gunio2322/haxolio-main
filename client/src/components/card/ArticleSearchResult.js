import React, { useEffect, useState } from 'react'
// import styles from './blog.css' //ok
import styles from './blog.module.css';
import axios from 'axios'
import ArticleOverview from './ArticleOverview'
import { IntroFixedCol } from './IntroFixeCol'
import { DataNotFound } from '../../components/handler/handler.component'
import { Link } from 'react-router-dom'

import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'

import Loading from '../../components/animations/loading.component'


function ArticleSearchResult({keyword}) {
    let [article, setArticle] = useState(undefined);
    useEffect(() => {
        axios.get(`http://localhost/blog/search/${keyword}`)
        .then((res) => {
            setArticle(res.data);
        })
        .catch((err)=>{
            console.log(err);
            setArticle(null);
        })
        return () => {
            
        }
    }, [])
    

    if(article === undefined){
        return <Loading/>
    }

    return (
        <>
        <IntroFixedCol>
            {article === null ? <DataNotFound/>: <></>}
            <div style={{maxWidth:"80%", display:"grid"}}>
                <small className="text-muted" style={{fontFamily:"robotomono"}}>
                    Found <span className="white">{article ? article.length : 0}</span>&nbsp;
                    entries for keyword : " <span className="white">{keyword}</span> "
                </small>
                <small className="white" style={{fontFamily:"robotomono"}}>
                    <Link to="/blog">
                        Go Back To Main Page
                    </Link>
                </small>
                {   article ? 
                    article.map((item,index) => {    
                        return <ArticleOverview key={index} article={item}/>
                    })
                    :
                    <></>
                }
            </div>

        </IntroFixedCol>
        </>
    )
};

export default ArticleSearchResult;
