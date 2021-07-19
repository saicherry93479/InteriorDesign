import React from 'react'
import './AboutContent.css'
import ImageContent from '../Images/Image.jpg'
import ArrowForward from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom'
function AboutContent() {
    return (
       <main>
           <div className="content">
               <div className="content-Inner">
               <h1>Make Choice of Your Design</h1>
              <Link to="/products" className="link"><button><span>View More </span> <ArrowForward color="secondary"  ></ArrowForward></button></Link> 
               </div>
           </div>
           <div className="image">
               <img src={ImageContent} alt="ImageT"></img>
           </div>
       </main>
    )
}

export default AboutContent
