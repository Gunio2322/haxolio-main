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

export const IntroFixedCol = ({children}) =>{
    return (
        <>
            <div className={`container-fluid`}>
                <div className="row">
                    <div className={`col-md-12 col-lg-4`}>
                        
                    </div>
                    <div className={`col-md-12 col-lg-4 ${styles.min_height100} ${styles.flex_centers} ${styles.intro}`}>
                        <h1>BLOG</h1>
                        <div>
                            <img className="rounded" src={profile} alt="profile" style={{width:"40%"}}></img>
                            <Shuffler>
                                <div>_</div>
                                <h4>Thura Moe Myint</h4>
                                <span>Cyber Security Researcher</span>
                            </Shuffler>
                        </div>

                            <span className={styles.icons} style={{margin:"0.5rem"}}>
                                <a href="https://github.com/mgthuramoemyint" target="_blank" rel="noreferrer">
                                        <FaGithub size={20}/> @mgthuramoemyint
                                </a>
                            </span>
                            <span className={styles.icons} style={{margin:"0.5rem"}}>
                                <a href="https://www.facebook.com/mgthuraisgod/" target="_blank" rel="noreferrer">
                                        <FaFacebook size={20}/> @mgthuraisgod
                                </a>
                            </span>
                            <span className={styles.icons} style={{margin:"0.5rem"}}>
                                <a href="https://twitter.com/mgthuramoemyint" target="_blank" rel="noreferrer">
                                        <FaTwitter size={20}/> @mgthuramoemyint
                                </a>
                            </span>
                            <span className={styles.icons} style={{margin:"0.5rem"}}>
                                <a href="https://www.linkedin.com/in/mgthuramoemyint/" target="_blank" rel="noreferrer">
                                        <FaLinkedin size={20}/> @mgthuramoemyint
                                </a>
                            </span>

                    </div>
                    <div className={`col-md-12 col-lg-8 ${styles.min_height100}`}>
                        <div style={{height:"15vh"}}></div>
                        {children}
                    </div>
                        <div style={{height:"15vh"}}></div>
                </div>
            </div>
        </>
    )
}
