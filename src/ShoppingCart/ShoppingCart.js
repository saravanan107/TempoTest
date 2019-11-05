import './ShoppingCart.css';

import React from 'react';

class ShoppingCart extends React.Component{       

    render(){

        if(this.props.cartItems.length === 0)
            return <div className="no-items" > No items in cart </div>


        return <div className="cart-items">

                {this.props.cartItems.map( (item, i ) => {                    
                    const  { image , specs,  name, id }  = item.product;
                    return <div data-index={id} key={i}className="cart-item">
                        <div className="image-col"><a href="javascript" className="product-photo"><img src={image.small} alt={name}/></a></div>
                        <div className="description-col">
                            <li><span></span>{specs.manufacturer}</li>
                            <li><span></span>{specs.storage} GB</li>
                        </div>
                        <div className="quantity-col">Qty : {item.qty}</div>

                            </div>
                    })
                }
                </div>
    }
}

export default ShoppingCart;
