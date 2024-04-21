import React, { useState, useEffect } from 'react'
import styles from './card.module.css'  //ok
// import styles from '../../css/card.css';
import  {IoPricetagsSharp}  from "react-icons/io5"
import {CgCalendarDates} from "react-icons/cg"
import {AiOutlineCaretRight} from "react-icons/ai"
import { Shuffler } from '../animations/anime.component'
import { Link, useParams } from 'react-router-dom'
import {FaGithub,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa';
import profile from '../../assets/img/profile3.jpg'
import axios from 'axios'
import Loading from '../animations/loading.component'
import Notfound from '../handler/handler.component'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Tags from '../../components/card/Tags.js'

function ArticleDetail() {
    const [article, setArticle] = useState([]);
    const { slug, _id, title, content, category } = useParams();

    
    useEffect(()=>{

        axios.get(`http://localhost:3001/api/postFilter/${_id}`)
            .then((res)=>{
                console.log(res.data.title);
                setArticle(res.data);
            })
            .catch((err)=>{
                console.log(err);
                setArticle(null);
            })

    },[])

    useEffect(()=>{
        window.scrollTo(0,0);
    },[article])

    if(article === undefined){
        return (
            <Loading/>
        )
    }
    if(article === null){
        return (
            <Notfound/>
        )
    }

    return (
        <>
            <div className={`${styles.robotomono} white`}>
                <div className="text-center">
                    <h1 className={`${styles.underline} ${styles.oswald}`}>{article.title}</h1>
                    <div>
                        <AiOutlineCaretRight/>
                        &nbsp;
                        <Shuffler type="scroll">
                            <Link to={`/blog/category/${article.category}`} className={styles.green_link}>
                                {article.category}
                            </Link>
                        </Shuffler>
                    </div>

                    {/* {
                        article.tag[0] ? 
                        <div>
                                <IoPricetagsSharp/> 
                                &nbsp;
                                {article.tag.map((tag,index)=>{
                                    return <Tags key={index} tag={tag}/>
                                })}
                            </div>
                            :
                            <></>
                        } */}
                    <div>
                        <CgCalendarDates/> 
                        &nbsp;
                            <small className="text-muted text-muted-wite">
                                <Shuffler type="scroll">
                                    <span>{new Date(article.updated_at).toDateString()}</span>
                                </Shuffler>
                            </small>

                    </div>
                </div>
                <div style={{height:"15vh"}}></div>
                <ReactMarkdown  className={styles.markdown}
                                children={article.markdown}
                                remarkPlugins={[remarkGfm]}
                />

            </div>
<div>
<div style={{color:"rgba(188, 199, 211, 0.75)"}}>
{article.content}
</div>

</div>


     </>   
    )
};

export default ArticleDetail;
