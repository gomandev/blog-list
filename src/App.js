import Footer from "./components/footer";
import Navbar from "./components/header";
import { BlogFeatured, BlogHero, BlogList } from "./components/Blog";
import { posts } from "./data/posts";


export default function Blog() { 
    return (
        <>
            <Navbar />
                <BlogHero />
                <BlogFeatured />
                <BlogList posts={posts} />
                {/* <SignupForms /> */}
            <Footer />
        </>
    )
}
