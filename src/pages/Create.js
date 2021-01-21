import {useState} from 'react';
// import { useParams } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('cheditte');
    const [isPending, setIsPending ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = { title, body, author };
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                ></textarea>
                <label>Blog Author:</label>
                <select 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="cheditte">Cheditte</option>
                    <option value="mario">Mario</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled >Adding Blog...</button> }
            </form>
            <h3>{title}</h3>
            <h3>{body}</h3>
        </div>
    )
}

export default Create;
