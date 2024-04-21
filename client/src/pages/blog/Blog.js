import Navigation from "../../components/nav/nav.component.js";
import ArticleLists from '../../components/card/ArticleLists.js';
import styles from './blog.module.css';
import { ScrollIndicator } from '../../components/animations/anime.component.js';
import Footer from '../../components/footer/footer.component.js'

function Blog(){
    return (
        <div>
     
            <div className={`${styles.bgblack}`}>
                <Navigation/>
                <ScrollIndicator/>
                <ArticleLists/>
                <Footer/>
            </div>
        
        </div>
    )
}

export default Blog;