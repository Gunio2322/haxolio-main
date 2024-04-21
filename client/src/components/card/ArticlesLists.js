import React, { useEffect, useState } from 'react'
// import styles from './blog.module.css' //ok
import styles from './blog.module.css'
// import styles from '../../css/blog.css';
import axios from 'axios'
import ArticleOverview from './ArticleOverview'
import { IntroFixedCol } from './IntroFixeCol'
import { DataNotFound } from '../../components/handler/handler.component'
import { Link } from 'react-router-dom'

import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import Loading from '../../components/animations/loading.component'





function ArticleLists() {
    let [articles, setArticles] = useState([])
    let [paginator, setPaginator] = useState(null)

    const pagination_handler = (url) =>{
        // setArticles([]); // to trigger loading screen
        axios.get(url)
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

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            axios.get("http://localhost:3001/api/getPosts")
            .then((res) => {
                setArticles(res.data.results);
                const buffer = {
                    next: res.data.next,
                    previous: res.data.previous,
                    entries: res.data.count
                }
                setPaginator(buffer);
            })
            .catch((err)=>{
                console.log(err);
                setArticles(null);
            })
        }
        return () => {
            mounted = true;
        }
    }, [])

    useEffect(()=>{
        window.scrollTo(0,0);
    },[articles])

    if(articles){
        return <Loading/>
    }

    return (
        <IntroFixedCol>

            { articles === null? <DataNotFound/>: <></>}

            <div style={{maxWidth:"80%", display:"grid"}}>
                {   articles ? 
                    articles.map((articles) => {    
                        return <ArticleOverview key={articles._id} 
                        /> //donest have stable id
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
};
export default ArticleLists;