import React,{useRef} from 'react'
import './styles/HomeISNotLoogged/style.css'
import uranus from '../assets/HomePageAssets/Group.svg'
import moon from '../assets/HomePageAssets/Group 33.svg'
import SignIn from './SignIn'
import Login from './Login'

const HomeNotLogged = () => {
    const SignDisp = useRef(null)
    const b_SignDisp = useRef(null)
    const loginDisp = useRef(null)
    
    const DispSignIn = ()=>{
        SignDisp.current.style.display="flex"
        b_SignDisp.current.style.display="block"
    }
    const DispLogIn = ()=>{
        loginDisp.current.style.display="flex"
        b_SignDisp.current.style.display="block"
    }
    
    const hide = ()=>{
        if(SignDisp.current.style.display=="flex"){
            SignDisp.current.style.display='none'
            b_SignDisp.current.style.display="none"
        }else if(loginDisp.current.style.display=="flex"){
            loginDisp.current.style.display='none'
            b_SignDisp.current.style.display="none"
        }
    }


  return (
    <>
    <div className='body' >
        <div className='header'>
            <div className="disp-flex space-btwn">
                <div className="logo">
                    <img src={uranus} alt="URANUS"/>
                </div>
                <div className="sign disp-flex space-btwn" >
                    <input type="button" value="Log in" className="login" onClick={DispLogIn}/>
                    <input type="button" value="Sign up" className="signIn" onClick={DispSignIn}/>
                    <img src={moon} alt="MOON"/>
                </div>
            </div>
        </div>
        <div className="first-section disp-flex ">
            <div className="disp-flex ">
                <div className="titles">
                    <div className="sub-title">
                        <p><span>THE BEST</span>ONLINE LEARNING PLATFORM!</p>
                    </div>
                    <div className="title">
                        <p>Online learning is more easier with <span>uranus.</span></p>
                    </div>
                    <div className="below-title">
                        <p>Join the electronic service of the faculty of <br/> and technology Al Hoceima </p>
                    </div>
                    <div className="title-btns disp-flex " >
                        <div className="sub-title-btns disp-flex">
                            <div className="getStarted disp-flex">
                                <input type="button" value="Get Started"/>
                            </div>
                            <div className="watchVideo disp-flex">
                                <img src="Play icon.svg" alt=""/>
                                <input type="button" value="Watch Video"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="bigPicture">
                    <img src="mainPic.svg" alt=""/>
                </div>
            </div>
            
        </div>
        <section className="quote">
            <div>
                <div>
                    <img src="Qoute.svg" alt=""/>
                </div>
                <div className="sub-quote">
                    <img src="“.svg" alt=""/>
                    <img src="“.svg" alt=""/>
                    <p>
                        <span>“</span>I have looked further into space than ever human being did before me.
                        I have observed stars of which the light, it can be proved, must take 
                        two million years to reach the earth.<span>“</span>
                    </p>
                    <p>
                        <span>William Herschel</span>German-British Astronomer (Discovered Uranus)
                    </p>
                </div>
            </div>
        </section>
        <section className="features disp-flex ">
            <div>
                <div className="disp-flex">
                    <h3>Features</h3>
                    <p>There are too many 
                        reasons to let<br/>you join us, there are some.
                    </p>
                    <div className="disp-flex">
                        <input type="button" value="Get started"/>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src="Group 9.svg" alt=""/>
                            <h4>Set some Goals</h4>
                            <p>Lorem ipsum dolor sit amet
                            , consectetur adipis cing elit.
                            </p>
                        </div>
                        <div>
                            <img src="Group 9(1).svg" alt=""/>
                            <h4>Quick Chat</h4>
                            <p>Lorem ipsum dolor sit amet
                            , consectetur adipis cing elit.
                            </p>
                        </div>
                        <div>
                            <img src="Group 9(2).svg" alt=""/>
                            <h4>Keep focus</h4>
                            <p>Lorem ipsum dolor sit amet
                            , consectetur adipis cing elit.
                            </p>
                        </div>
                        <div>
                            <img src="Group 9(3).svg" alt=""/>
                            <h4>Flexible Time</h4>
                            <p>Lorem ipsum dolor sit amet
                            , consectetur adipis cing elit.
                            </p>
                        </div>
                        <div>
                            <img src="Group 9(4).svg" alt=""/>
                            <h4>Announces</h4>
                            <p>Lorem ipsum dolor sit amet
                            , consectetur adipis cing elit.
                            </p>
                        </div>
                        <div>
                            <img src="Group 9(5).svg" alt=""/>
                            <h4>Solving Problems</h4>
                            <p>Lorem ipsum dolor sit amet
                            , consectetur adipis cing elit.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section className="why">
            <div>
                
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="Vector.svg" alt=""/>
                            </div>
                            <h5>Teachers</h5>
                        </div>
                        
                        <p>
                            Lorem ipsum dolor sit 
                            amet, consectetur adipis cing elit.
                        </p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="Vector.svg" alt=""/>
                            </div>
                            <h5>Students</h5>
                        </div>
                        <p>
                            Lorem ipsum dolor sit 
                            amet, consectetur adipis cing elit.
                        </p>
                    </div>
                </div>
                <img src="Saly-1.svg" alt=""/>
            </div>
            <div>
                <h3>Why Uranus?</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. 
                </p>
                <ul>
                    <li>
                        <img src="Group 15.svg" alt=""/>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <img src="Group 15.svg" alt=""/>
                        <p>Duis aute irure dolor in reprehenderit.</p>
                    </li>
                    <li>
                        <img src="Group 15.svg" alt=""/>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <img src="Group 15.svg" alt=""/>
                        <p>Excepteur sint occaecat cupidatat non proident.</p>
                    </li>
                    <li>
                        <img src="Group 15.svg" alt=""/>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="how-works">
            <div>
                <div>
                    <h5>How Does it work</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.
                    </p>
                    <div>
                        <input type="button" value="Watch video"/>
                        <div>
                            <img src="30-play.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="third-mainSvg.svg" alt=""/>
                </div>
            </div>
            
        </section>
        <section className="contact-us">
            <div>
                <div>
                    <span>
                        <input type="text" name="First name" id="" placeholder="First Nmae"/>
                        <input type="text" name="Last name" id="" placeholder="Last Name"/>
                    </span>
                    <input type="email" name="email" id="" placeholder="email"/>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <div>
                        <input type="button" value="Send"/>
                    </div>
                </div>
                <div>
                    <h5>
                        Contact us
                    </h5>
                    <p>
                        You can contact with us by fill in the 
                        form below, or via our social media.
                    </p>
                    <ul>
                        <li>
                            <img src="/assets/location.svg" alt=""/>
                            <h5>Boukidan, Al Hoceima, MA</h5>
                        </li>
                        <li>
                            <img src="/assets/mobile.svg" alt=""/>
                            <h5>+212 (660) 000-000</h5>
                        </li>
                        <li>
                            <img src="/assets/email.svg" alt=""/>
                            <h5>contact@uranus.ma</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <footer>
            <div>
                <section>
                    <img src="Group.svg" alt=""/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. 
                    </p>
                </section>
                <section>
                    <h4>Sections</h4>
                    <ul>
                        <li>Teachers</li>
                        <li>Students</li>
                    </ul>
                </section>
                <section>
                    <h4>Help Center</h4>
                    <ul>
                        <li>Contact</li>
                        <li>Hrlp</li>
                        <li>Privacy & Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </section>
                <section>
                    <h4>Informations</h4>
                    <ul>
                        <li>Boukidan,Al Hoceima MA</li>
                        <li><hr/></li>
                        <li>+212 (660) 000-000</li>
                        <li>contact@fsth.ma</li>
                    </ul>
                </section>
            </div>
        </footer>
        <div>
            <div ref={SignDisp} className='signPopUp'>
                <SignIn />
            </div>
            <div ref={loginDisp} className='loginPopUp'>
                <Login />
            </div>
            <div className='b-signPopUp' ref={b_SignDisp}  onClick={hide}></div>
        </div>
    </div>
    </>
  )
}

export default HomeNotLogged