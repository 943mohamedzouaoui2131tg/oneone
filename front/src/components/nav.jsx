import { NavLink  } from "react-router-dom";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import {useRef, useState} from 'react'
export default function Nav() {
    const navigate = useNavigate()
    const ulmenu = useRef()
    const btnmenu = useRef()
    const listOfLinks = useRef([])
function functionOfAnimateTd(x,has) {
    let hasStarted = has;
    const tdani = gsap.fromTo(".TheMainLoader table td",{
            x: 40,
            y: 40,
            opacity: 0,
            ease: "power1.inOut",
        },
        {
            onStart: () => {
                if (!hasStarted) {
                    document.querySelector(".TheMainLoader").classList.add("active");
                    
                    hasStarted = true; 
                }
            },
            scale: 1,
            opacity: 1,
            x: 0,
            yoyo: true,
            repeat: 1,
            y: 0,
            stagger: {
                grid: [10, 14],
                amount: 1,
                from: "end",
                ease: "power2.in",
            },
            onComplete: () => {
                tdani.reverse();
                
                document.querySelector(".TheMainLoader").classList.remove("active");
            },
            onRepeat: () => {
                if (hasStarted) {
                    
                    navigate(x)
                    hasStarted = false
                }
            },
        }
    );
}
    const [btnclickTF , setBtnclickTF] = useState(true)
    function handlClickbtnmenu(e) {
        setBtnclickTF(!btnclickTF)
        const btn =  ulmenu.current
        const list = gsap.utils.toArray(listOfLinks.current)
        document.querySelector('.nav-bar').classList.add('removehidden')
        if (btnclickTF) {
            
            gsap.to(btn, {
                width:"190px",
                onStart:()=>{
                    list.forEach((ele)=>{
                        gsap.set(ele , {
                            x:-50,
                            opacity:0
                        })
                    })
                },
                height:"150px",
                duration:0.4,
                top:"-10px",
                right:"-10px",
                ease:"power2.out",
                padding:"20px 0px",
                onComplete:()=>{
                    list.forEach((ele)=>{
                        gsap.fromTo(ele , {
                            x:-50,
                            duration:1,
                            opacity:0
                        },{
                            x:0,
                            duration:1,
                            opacity:1
                        })
                    })
                }
            })
        } else {
            
            list.forEach((ele)=>{
                gsap.fromTo(ele , {
                    x:0,
                    duration:1,
                    opacity:1
                },{
                    x:-50,
                    duration:0.5,
                    opacity:0,
                    onComplete:()=>{
                        gsap.to(btn, {
                            width:"100%",
                            height:"100%",
                            duration:0.4,
                            top:"0",
                            right:"0",
                            padding:"0",
                            ease:"power2.out",
                            onStart:()=>{
                                
                            }
                        })
                    }
                })
            })
            
        }
    }
    async function handlclicknalink(e,x,has) {
        await e.preventDefault()
        await e.stopPropagation()
        functionOfAnimateTd(x,has)
    }
    
    return(
        <div className="nav-bar">
            <div className="container">
            <div className="logo">
                <div className="container-circle">
                <div className="circle white"></div>
                <div className="circle black"></div>
                </div>
                <p>InsuFi</p>
            </div>
            <ul>
                <li>
                    <ul>
                        <li  >
                        <NavLink onClick={(e)=>{handlclicknalink(e,"/",false)}} to='/'> home </NavLink>
                        </li>
                        <li >
                            <NavLink onClick={(e)=>{handlclicknalink(e,"/discover",false)}} to='/discover'> discover </NavLink>
                        </li>
                    </ul>
                </li>
                <li  info='about'>
                    <NavLink onClick={(e)=>{handlclicknalink(e,"/about",false)}} to='/about'> about </NavLink>
                </li>
                <li  info='faqs'>
                    <NavLink onClick={(e)=>{handlclicknalink(e,"/FAQs",false)}} to='/FAQs'> FAQs </NavLink>
                </li>
            </ul>
            <div className="menuchose">
                <button onClick={handlClickbtnmenu} ref={btnmenu}>Menu</button>
                <ul ref={ulmenu}>
                    <div className="space"></div>
                    <NavLink to='/Dashboard' ref={(el)=>{listOfLinks.current[0]=el}}>
                        <li>quick view</li>
                    </NavLink>
                    <NavLink to='/Article' ref={(el)=>{listOfLinks.current[1]=el}}>
                        <li>acticles</li>
                    </NavLink>
                </ul>
            </div>
            </div>
        </div>
    )
}