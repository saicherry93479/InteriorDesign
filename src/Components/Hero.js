import React,{useEffect,useState} from 'react'
import Data from './HeroData'
import { makeStyles } from '@material-ui/core';
import './Hero.css'
import ArrowForward from '@material-ui/icons/ArrowForward';

import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles=makeStyles({
    icon:{
        color:"white",
        cursor:"pointer"
    }

})


const intialState=0;
function Hero() {
    const classes=useStyles();
    const [counter,setCounter]=useState(intialState)
    
    useEffect(()=>{
        const interval =setInterval(()=>{setCounter(counter===Data.length-1?0:counter+1)},3000)
        return (
        ()=>{
            clearInterval(interval)
        }
        )
       

    },[counter])
   

    
    


    const arrowForWard=()=>{
       setCounter(counter===Data.length-1?0:counter+1)
      
    }
    const arrowBackWard=()=>{
        setCounter(counter===0?(Data.length-1):counter-1)
        
    }

    return (
        <>
        <div className="icon backward" >
           <ArrowBack color="secondary" fontSize="large" className={classes.icon} onClick={arrowBackWard} ></ArrowBack>

        </div>
        <div className="icon forward">
        <ArrowForward color="secondary" fontSize="large" className={classes.icon} onClick={arrowForWard} ></ArrowForward>

        </div>
       
         {
             Data.map((dataItem,index)=>{
                 return (

                    counter===index&& <div className="image_container" key={index}>
                          <img src={dataItem.image} alt={dataItem.Title}></img>

                     </div>
                    
                 )
             }

             )
         }
       
            
        </>
    )
}

export default Hero
