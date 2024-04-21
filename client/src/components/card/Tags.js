import React, { useState, useEffect } from 'react'
// import styles from './card.css'  //ok
import styles from './card.module.css';
import  {IoPricetagsSharp}  from "react-icons/io5"
import {CgCalendarDates} from "react-icons/cg"
import {AiOutlineCaretRight} from "react-icons/ai"
import { Shuffler } from '../animations/anime.component'
import { Link } from 'react-router-dom'
import {FaGithub,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa';
import profile from '../../assets/img/profile3.jpg'
import axios from 'axios'
import Loading from '../animations/loading.component'
import Notfound from '../handler/handler.component'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Tags({tag}) {
    return (
        <Link to={`/blog/search/${tag}`}>
            <Shuffler type="scroll">
                <small className={styles.hl}>{tag}</small> 
            </Shuffler>
        </Link>
    )
};

export default Tags;