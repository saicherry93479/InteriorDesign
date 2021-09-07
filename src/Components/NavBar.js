import React,{useState,useEffect}  from 'react'
import {Link} from 'react-router-dom'

import './NavBar.css'

function NavBar() {
  const [color,setColor]=useState(false)
  const handleScroll=()=>{
   
    if (window.pageYOffset > 20) {
     setColor(true)
    
    } else {
      setColor(false)
     
    }
   
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)


    return ()=>{
      window.removeEventListener('scroll',handleScroll)

    }

    
  },[])
  

  
    return (
       
            <nav  className={color? 'scroll':'navbar'} >
              <div className="Logo">
                <Link to="/" className="link" > <h2>Interior Designs</h2></Link>
                
              </div>
              <Link to="/signin" color="inherit" className="link"><button > Sign In </button></Link>
   
   
    {/* <Link to="/signup" className={classes.link}>SignUp</Link> */}

    </nav>
            
       
    )
}

export default NavBar
