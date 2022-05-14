import React,{useEffect, useRef}from 'react'
import home from"../assets/home.svg"
import account from"../assets/account.svg"
import book from"../assets/book.svg"
import message from"../assets/message.svg"
import settings from"../assets/setting.svg"
import logout from"../assets/logout.svg"
import "./styles/menu/menuStyle.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Menu = (props) => {
    const location = useLocation()
    console.log(location.pathname);
    const ul=useRef()
    const setInitial=()=>{
        for (let index = 0; index < 5; index++) {
            ul.current.childNodes[index].className="";
        }
    }
    const setIsHome = ()=>{
        switch(location.pathname){
            case "/": {
                setInitial()
                console.log(ul.current.childNodes);
                ul.current.childNodes[0].className="isHome";break
            }
            case "/courses/module": {
                setInitial()
                ul.current.childNodes[1].className="isHome";break;}
            case "/courses": {
                setInitial()
                ul.current.childNodes[1].className="isHome";break;}
            case "/learning": {
                setInitial()
                ul.current.childNodes[1].className="isHome";break;}
            case "/chat": {
                setInitial()
                ul.current.childNodes[2].className="isHome";break;}
            case "/profile": {
                setInitial()
                ul.current.childNodes[3].className="isHome";break;}
            case "/settings": {
                setInitial()
                ul.current.childNodes[4].className="isHome";break;}
            default:{
                setInitial()
                ul.current.childNodes[0].className="isHome"};
        }
    }
    useEffect(()=>{
        setIsHome()
    },[location.pathname])
  return (
    <div className='menu'>
        <ul ref={ul}>
            <li>
                <Link to={'/'}>
                    <img src={home}/>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link to={props.linkit}>
                <img src={book}/>
                <p>{props.Learning}</p>
                </Link>
            </li>
            <li>
                    <Link to={"/chat"}>
                    <img src={message}/>
                    <p>Chat</p>
                    </Link>
                
            </li>
            <li>
                <Link to={'/profile'}>
                <img src={account}/>
                <p>Profile</p>
                </Link>
            </li>
            <li>
                <Link to={'/settings'}>
                <img src={settings}/>
                <p>Settings</p>
                </Link>
            </li>
        </ul>
        <div>
            <img src={logout}/>
            <p>Log out</p>
        </div>
    </div>
  )
}

export default Menu

