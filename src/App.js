import './App.css';

import AllProducts from './Store/AllProducts';
import Filters from './Filters/Filters';
import ProductsList from './Products/ProductsList';
import React from 'react';
import ShoppingCart from './ShoppingCart/ShoppingCart';

let initialFilters = {
                manufacturer : [],
                storage : [],
                os : [],
                camera : []
              }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      productList : AllProducts,
      filteredProducts: AllProducts,
      filterBy : {...initialFilters},
      shoppingCart : [],
      showCart : false,
      showMessage : false
            
    }
  }

  componentDidMount(){
    let shoppingCart = localStorage.getItem('shoppingCart')
    if(shoppingCart)
      this.setState({
        shoppingCart : JSON.parse(shoppingCart)
      })
  }

  // Event handling for filters
  handleClick=(e)=>{
    let filterBy  = {...this.state.filterBy} ;
    if(filterBy[e.target.name].includes(e.target.value))
        filterBy[e.target.name] = filterBy[e.target.name].filter(x => x !== e.target.value);
    else
        filterBy[e.target.name] = filterBy[e.target.name].concat( e.target.value )
    
    this.setState({ filterBy }, ()=> { this.handleFilterChange() ; })
  }

  //reset button
  handleResetClick=()=>{
      this.setState({ filterBy : {...initialFilters} })
  }

  //Checkbox filtering
  handleFilterChange=()=>{
      let filterBy  = {...this.state.filterBy} ;
      let filteredProducts = this.state.productList.filter( x => (filterBy.manufacturer.length === 0 ||  filterBy.manufacturer.includes(x.specs.manufacturer.toLowerCase()) ) && 
                                                                  (filterBy.storage.length === 0 || filterBy.storage.includes(x.specs.storage.toString().toLowerCase() ) ) && 
                                                                  (filterBy.os.length === 0 || filterBy.os.includes(x.specs.os.toLowerCase()) )&&
                                                                  (filterBy.camera.length === 0 ||filterBy.camera.includes(x.specs.camera.toString().toLowerCase() )) );

      this.setState({ filteredProducts })
  }

  //Buy item
  handleBuyClick(product){    

    let shoppingCart = [...this.state.shoppingCart];   
    

    let selectedItem = shoppingCart.find( x => x.productId === product.id);
    shoppingCart = shoppingCart.filter( x => x.productId !== product.id );
    let qty = 1;

    
    if(selectedItem)
      qty = selectedItem.qty +  1;   
    
    shoppingCart = shoppingCart.concat({
        productId : product.id,
        product : product,
        qty : qty
      })  
    

    this.setState({ showMessage: true, shoppingCart }
      ,()=> { localStorage.setItem('shoppingCart', JSON.stringify(this.state.shoppingCart));
              this.hideMessage() 
            } )
  }

  
  hideMessage=()=>{
    setTimeout(()=> { this.setState({ showMessage : false })}, 3000)
  }

  

  render(){

    let quantity = 0;
    this.state.shoppingCart.length > 0 && this.state.shoppingCart.map( x => quantity += x.qty);


    return (
      <div>   
          <header className="compact">             
            <h1><a href="javascript">Tempo Mobile Store</a></h1>   
            <div className="right-col">               
            <h2 className="tempo"><a href="http://tempo.io/">Back to Tempo's website</a></h2> 
              <div className="shopping-cart"  onClick={()=>{ this.setState({ showCart : !this.state.showCart})} }>
                <span><i className="fa fa-fw fa-shopping-cart"></i>Cart</span>
                { quantity > 0 && <span className="cart-icon" >{quantity }</span> }
              </div>  
            </div>     
          </header>

          <div className="main-content">    
            <div className='message-row'> { this.state.showMessage && 'Item added to cart' }</div>
            {this.state.showCart && <ShoppingCart cartItems = { this.state.shoppingCart } /> }      
              <Filters handleClick={this.handleClick} handleResetClick={ this.handleResetClick } />
              <ProductsList productList = { this.state.filteredProducts } buyNowClick={(product) =>{ this.handleBuyClick(product) } } /> 
              
          </div>
      </div>
    );
  }
}

export default App;
