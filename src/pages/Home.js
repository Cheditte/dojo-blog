// import {useState, useEffect} from 'react';
import BlogList from '../components/BlogList';
import useFetch from '../components/useFetch';

const Home = () => {

    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    // const handleDelete = id => {
    //     const newBlogs = blogs.filter(filterElement => filterElement.id !== id);
    //     setBlogs(newBlogs);
    // }



    // useEffect(() => {
    //     console.log('Use Effect Run');
    // },[]);

    // useEffect(() => {
    //     console.log("blogs yüklend");
    // },[blogs]);

    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" 
            // handleDelete={handleDelete}
            />}
            {/* <BlogList blogs={blogs.filter(element => element.author == 'Cheditte')} title="Cheditte's Blogs!"/> */}
        </div>
     );
}
 
export default Home;