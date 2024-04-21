import Navigation from "../../components/nav/nav.component.js";
import ArticleSearchResult from '../../components/card/ArticleSearchResult.js';
// import styles from './blog.css';  //ok
import styles from './blog.module.css';
import { useParams } from 'react-router-dom';
import { ScrollIndicator } from '../../components/animations/anime.component.js';
import Footer from '../../components/footer/footer.component.js'

function BlogResult() {
    const {keyword} = useParams();
    return (
        <>
            <div className={`${styles.bgblack}`}>
                <Navigation/>
                <ScrollIndicator/>
                <ArticleSearchResult keyword={keyword}/>
                <Footer/>
            </div>
        </>
    )
};
export default BlogResult
