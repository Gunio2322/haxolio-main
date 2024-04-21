import { useEffect, useParams } from "react";
import Navigation from "../../components/nav/nav.component.js";
import ArticleDetail from '../../components/card/ArticleDetail.js';
import { IntroFixedCol } from '../../components/card/IntroFixeCol.js';
// import styles from './blog.css'; //ok
import styles from './blog.module.css';
import { ScrollIndicator } from '../../components/animations/anime.component.js';
import Footer from '../../components/footer/footer.component.js';


function Article() {
        // const { _id } = useParams();
        // useEffect(()=>{ 
        //     console.log(_id);
        // },[]);
    return (
        <>
            <div className={`${styles.bgblack}`}>
                <Navigation />
                <ScrollIndicator />
                <IntroFixedCol>
                    <ArticleDetail />
                </IntroFixedCol>
                <Footer />
            </div>
        </>
    )
};
export default Article