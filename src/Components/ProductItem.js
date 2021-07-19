import React,{useEffect} from 'react'
// import {Link} from 'react-router-dom'
import Data from './ProductsData'
import ProductsNavBar from './ProductsNavBar'
import ArrowForward from '@material-ui/icons/ArrowForward';
import './ProductItem.css'
// import {Card} from '@material-ui/core'
function ProductItem({value}) {
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    const DataPara="I think so, it's good to see.. If your happy with the design.Please, contact.. "
 
    return (
        <>
            <ProductsNavBar></ProductsNavBar>
            <div className="productMain" >
             
                <div className="productImage">
                    <img  src={Data[value-1].image} alt="title"></img>
                </div>
                <div className="productContent">
                    <h2>{Data[value-1].Title}</h2>
                    <h4>{Data[value-1].cost}</h4>
                    <p>{DataPara}</p>
                    <button><span>Contact </span><ArrowForward color="secondary"  ></ArrowForward></button>

                </div>
                

            </div>
            
           
        </>
    )
}

export default ProductItem
