import React,{useRef,useState,useEffect} from 'react'
import addPost from '../assets/addPost.svg'
import './styles/AddPost/addPost.css'
import postArrow from '../assets/postArrow.svg'
import bluePostArrow from '../assets/bluePostArrow.svg'
import plus from '../assets/+.svg'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const SERVER = "http://localhost:3001 ";

const AddPost = (props) => {
    const addPostDiv = useRef(null)
    const backgroundDiv = useRef(null)

    const displayAddPost = ()=>{
        addPostDiv.current.style.display="flex"
        backgroundDiv.current.style.display="flex"
    }

    const undisplayAddPost = () =>{
        addPostDiv.current.style.display="none"
        backgroundDiv.current.style.display="none"
    }


  const [file, setFile] = useState();

  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {

        setFile(e.target.files[0]);
        console.log(e.target.files[0]);

        setFileName(e.target.files[0].name);
        console.log(e.target.files[0].name);

      };

  const uploadFile = async (e) => {

        const formData = new FormData();

        formData.append("file", file);

        formData.append("fileName", fileName);

        try {

          const res = await axios.post(`${SERVER}/uploadfile/upload`,

            formData

          );

          console.log(res);

        } catch (ex) {

          console.log(ex);

        }
        addPostDiv.current.style.display="none"
        backgroundDiv.current.style.display="none"
    };

    const location = useLocation()
    
    const setIsHome = ()=>{
        let AddPost = document.getElementById("addPost");
        switch(location.pathname){
            case "/": {
              AddPost.style.display="flex";
              break;
            }
            case "/chat": {
              AddPost.style.display="none"
              break;}
            default:{
              AddPost.style.display="none"
              break;
            };
        }
    }
    useEffect(()=>{
        setIsHome()
    },[location.pathname])

  return (
    <div id="addPost" className='b-addPost'>
            <div onClick={displayAddPost}>
              <img src={addPost} />
            </div>
            <div className='addPost' ref={addPostDiv}>
                <div>
                    <div>
                        <img src={props.image} />
                        <div>
                            <h5>{props.name}</h5>
                            <p>{props.role}</p>
                        </div>
                    </div>
                    <div onClick={uploadFile}>
                        <p>Post</p>
                        <img src={postArrow}/>
                    </div>
                    
                </div>
                <div className='text-area'>
                    <textarea  placeholder='Type something'></textarea>
                </div>
                <div>
                    <label>
                      <img src={plus} />
                      <p>Attach file</p>
                      <input type='file' placeholder='Attach file' onChange={(e)=>{saveFile(e)}}/>
                    </label>
                </div>

            </div>
            <div className='background' ref={backgroundDiv} onClick={undisplayAddPost}></div>
    </div>
  )
}

export default AddPost