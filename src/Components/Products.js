import React,{useEffect,useRef} from 'react'
import Data from './ProductsData'
import NavBar from './NavBar'
import ArrowForward from '@material-ui/icons/ArrowForward';
import "./Products.css"
import useProductStyles from './ProductsStyles'
import {Card,CardContent,Typography} from "@material-ui/core"
import {Link } from 'react-router-dom'
function Products() {
    const classes=useProductStyles();
    const productRef=useRef();

    useEffect(()=>{
     
        window.scrollTo(0, 0);
        
        


        },[])
    
    return (
        <div className="products">
           <NavBar className="nav_products"></NavBar>
           <div className="space"></div>
           <div className="grid"  ref={productRef}>
           
           {
               Data.map((dataItem,index)=>{
                   return (
                      
                           <div  className="gridItem" key={index}>
                       <Card  className={classes.card}>
                           <CardContent>
                               <div  className="product-image">
                                   <img src={dataItem.image} alt={dataItem.Title}></img>

                               </div>

                               <Typography className={classes.text} >{dataItem.Title}</Typography>
                               <Typography className={classes.text}>{dataItem.cost}</Typography>
                               <Link to={`product${dataItem.index}`} className="link" >
                               <button className="button"><span>View Details</span>
                               <ArrowForward color="secondary"  ></ArrowForward></button>
                               </Link>
                               
                           </CardContent>
                       </Card>
                       </div>
                      
                   )
               })
           }
            </div>
            
        </div>
    )
}

export default Products
