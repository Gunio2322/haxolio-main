import React, { useState, useEffect } from 'react'
// import styles from './card.css' //
import styles from './card.module.css';
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


function ArticleOverview({article}) {
    const [obj, setObj] = useState(article)
    const {slug, title, _id, content, category, tag, date } = useParams();
    

    return (
        <div className={styles.post_sum}>
            <h3 className={styles.overview_title}>
                    <Link to={`/blog/${obj.slug}/${obj._id}`}>
                        {obj.title}
                    </Link>
                   
            </h3>
            <small className="text-muted">click on the title to read more about it</small>
            <div>
                <AiOutlineCaretRight/>
                &nbsp;
                <Shuffler type="scroll">
                    <Link to={`/blog/search/${obj.category}`}>
                        {obj.category}
                    </Link>
                </Shuffler>
            </div>

            {
                obj.tag ? 
                    <div>
                        <IoPricetagsSharp/> 
                        &nbsp;
                        { obj.tag.map((tag, index)=>{
                            return <Tags key={index} tag={tag}/>
                        })}
                    </div>
                    :
                    <>
                    
                    </>
            }
            <div>
                <CgCalendarDates/> 
                &nbsp;
                    <small className="text-muted">
                        <Shuffler type="scroll">
                            <span>{new Date(obj.date).toDateString()}</span>
                        </Shuffler>
                    </small>

            </div>
        </div>
    )
};

export default ArticleOverview;