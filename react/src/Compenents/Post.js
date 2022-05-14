import React,{useEffect, useRef , useState} from 'react'
import reply from '../assets/reply.svg'
import upVotedBlack  from '../assets/UpVotedBlack.svg'
import upVotedBlue from '../assets/UpVotedBlue.svg'
import profile_img from '../assets/profile_img.png'
import Replying from './Replying'
const Post = (props) => {

    const upVoteimg = useRef(null)
    const upVotep = useRef(null)


    const [onReplying, setOnReplying] = useState(false)

    const handleUpVote = ()=>{
        if(upVotep.current.textContent!="Up voted"){
            upVoteimg.current.src=upVotedBlue
            upVotep.current.textContent="Up voted"
            upVotep.current.style.color="#1E53CF"
            console.log(upVotep.current)
        }else{
            upVoteimg.current.src=upVotedBlack
            upVotep.current.textContent="Up vote"
            upVotep.current.style.color="#000000"
            console.log(upVotep.current)
        }
        
    }
    
  return (
    <div className='post'>
        <div>
            <div>
                <div className='image-profil'>
                    <img src={props.image} className='Profile' alt="Profile"/>
                </div>
                <div>
                    <h5>{props.name}</h5>
                    <p>{props.role}</p>
                </div>
            </div>
            <div onClick={handleUpVote}>
                <img className='upicon' src={upVotedBlack} alt="" ref={upVoteimg} />
                <p ref={upVotep}>Up vote</p>
            </div>    
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.
            </p>
            
        </div>
        {onReplying?<Replying myProfile={profile_img} onNotReplying={()=>{setOnReplying(false)}}/> :<div className='reply' onClick={()=>{setOnReplying(true)}} >
            <img className='replyicon' src={reply}/>
            <p>Reply</p>
        </div>}
        
    </div>
  )
}

export default Post