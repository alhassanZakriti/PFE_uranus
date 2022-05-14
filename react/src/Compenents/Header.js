import React,{useRef, useState} from 'react'
import search_icon from "../assets/search_icon.svg"
import notification_icon from "../assets/notification_icon.svg"
import profile from "../assets/profile_img.png"
import './styles/Header.js/headerstyle.css'
import modeToggle from '../assets/DarkToggle.svg'
import { useSelector } from 'react-redux'
import SearchContact from './headersubcompenent/SearchResult'
import axios from 'axios'
import logo from '../assets/logo.svg'

const Header = () => {
    let name = useSelector((data)=>data.userInfo.userName)
    axios.defaults.withCredentials=true;
    let searchResult = useRef()
    let [serachResultArray,setSeachResultArray]=useState();
    const [serched,setSearched] = useState(false)
    let result;
    const handleSearch = async(e)=>{
        if(e.key==="Enter"){
            console.log("u clicked Enter");
            await axios.get("http://localhost:3001/contact/searchcontact",{
                params:{
                    serached:e.target.value
                }
            }).
            then((res)=>{
                console.log(res.data.result)
                result = res.data.result
                if(result.length==0){
                    searchResult.current.style.display="flex"
                    setSearched(true)
                }else if(result.length>0){
                    console.log(serachResultArray);
                    console.log(searchResult.current);
                    searchResult.current.style.display="flex"
                    setSearched(true)
                }
                setSeachResultArray(result.map((user)=>{
                    return <SearchContact key={user.userID} name = {user.userName}/>
                }))
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
  return (
    <header>
        
        <div>
            <div>
                <input type="text" placeholder='Serach here...' onKeyUp={e=>handleSearch(e)}/>
            </div>
            <img src={search_icon} />
            <div className='searchResult'>
                <div ref={searchResult}>
                    {serched?(serachResultArray):("Loading")}
                </div>
            </div>
        </div>
        <div>
            <img src={notification_icon}/>
        </div>
        <div>
            <img src={profile}/>
            <p>Bonjour <span>{name} Bryan Lincon</span></p>
        </div>
        <div>
            <img src={modeToggle}/>
        </div>

        
    </header>
  )
}

export default Header