import React, {Component} from 'react';

class CartWidget extends Component{
    render(){
        return(
            <React.Fragment>
                <ul className="navbar-right">
                    <li>
                        <a id="cart">
                            <i className="fa fa-shopping-cart"></i><span className="conteo" id="cont1">0</span>
                        </a>
                    </li>
                </ul>
                <div className="shopping-cart">
                    <div className="shopping-cart-header">
                        <i className="fa fa-shopping-cart cart-icon"></i><span className="conteo" id="cont2">0</span>
                        <div className="shopping-cart-total">
                            <span className="lighter-text">Total:</span>
                            <span className="main-color-text" id="total">$0</span>
                        </div>
                    </div> 

                    <ul className="shopping-cart-items" id="listaPro">

                    </ul>
                </div> 
            </React.Fragment>
        );
    }
}
export default CartWidget; 