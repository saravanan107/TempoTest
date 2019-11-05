import './Products.css';

import React from 'react';

class Product extends React.Component{
   
    buyNowClick=()=>{
        this.props.buyNowClick(this.props.product);
    }

     

    render(){
        const  { image , specs, price, name, id }  = this.props.product;

        return <li data-index={id} value={id}>
                    <a href="javascript" className="product-photo"><img src={image.small} height="130" alt={name}/></a>
                    <h2><a href="javascript"> {name} </a></h2>
                    <ul className="product-description">
                        <li><span>Manufacturer: </span>{specs.manufacturer}</li>
                        <li><span>Storage: </span>{specs.storage} GB</li>
                        <li><span>OS: </span>{specs.os}</li>
                        <li><span>Camera: </span>{specs.camera} Mpx</li>
                    </ul>
                    <button onClick= {this.buyNowClick}>Buy Now!</button>
                    <p className="product-price">{price}$</p>
                    <div className="highlight"></div>
                </li>
        
    }
}

export default Product;

