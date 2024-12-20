import React, { useEffect } from 'react'
import { getArticles } from '../redux/slices/newsSlice'
import { useSelector , useDispatch } from 'react-redux'
// 1
const Article = () => {
    const dispatch = useDispatch()
    const {articles} = useSelector((state)=> state.allArticles)
    useEffect(()=>{
        dispatch(getArticles())
    },[dispatch])
    console.log(articles)
    return (
        <div className='articlesGroupe'>
            <div className="container">
                <div className="navbarArticles">
                    <div className="logo">
                        <div className="container-circle">
                            <div className="circle white"></div>
                            <div className="circle black"></div>
                        </div>
                        <p>InsuFi</p>
                    </div>
                    <p>see the last news with <span>Insufi</span></p>
                </div>
                <div className="allArticlesContent">
                    {articles && (<div className="top">
                        <div className="left">
                            <img src={articles[0]?.banner_image} alt="" />
                            <h1>fsdfkj;lsajf;ljdsa;</h1>
                        </div>
                        <div className="right"></div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Article