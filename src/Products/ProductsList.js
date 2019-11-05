import './Products.css';

import Product from './Product';
import React from 'react';

class ProductsList extends React.Component{
    
    //Buy now button click
    buyNowClick=(product)=>{
        this.props.buyNowClick(product)
    }   

    render(){

        let productList = this.props.productList ;

        if(productList.length === 0)
            return <div className="all-products page">Sorry, no product matches the selected criteria</div>

        return <ul className="products-list" >
                    { productList.map( (product,i ) => {
                        return  <Product product = { product } buyNowClick={(product) =>{ this.buyNowClick(product) } } key={i} />
                        })
                    }
                </ul>
        
    }
}

export default ProductsList;

