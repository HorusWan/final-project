import { CSSProperties } from "react";
import { useMutation } from '@tanstack/react-query'
import axios from "axios"
import { useState } from "react";

const formStyles: CSSProperties  = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  padding: '100px',
  backgroundColor: '#f2f2f2',
  borderRadius: '100px',
};

const textareaStyles: CSSProperties  = {
  width: '100%',
  padding: '60px 100px',
  margin: '8px 0',
  boxSizing: 'border-box',
  border: '2px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
};

const buttonStyles: CSSProperties = {
  backgroundColor: '#1E90FF',
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '20px 0',
  cursor: 'pointer',
  borderRadius: '5px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

const containerStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '100px',
};

export default function CreatePost(){
    const [title, setTitle] = useState("")

    const { mutate } = useMutation(
        async (title : string) => await axios.post('pages/api/posts/addPost', { title })
    )
    
    const submitPost = async (e: React.FormEvent) =>{
        e.preventDefault()
        mutate(title)
    }

    
    return(
        <form style={formStyles} onSubmit={submitPost}>
            <div>
                <textarea 
                  onChange={(e) => setTitle(e.target.value)} 
                  style={textareaStyles} 
                  name="title" value={title} 
                  placeholder="Say Something...">
                </textarea>
            </div>
            <div style={containerStyles}>
                <button style={buttonStyles} type="submit">Create Post</button>
            </div>
        </form>
    )
}
