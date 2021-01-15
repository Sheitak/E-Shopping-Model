/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SignUp from './SignUp'
// import LoginControl from 'components'

export const Navbar = ({ filter, setFiltering, count }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <a href="https://fr.reactjs.org/" className="navbar-brand crimson">
        <FontAwesomeIcon icon="shopping-cart" /> E-Shopping
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="registered">
          {/*Login/Register*/}
        </div>
        <div className="row ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                onChange={(e) => {
                  setFiltering(e.target.value.length > 0)
                  filter(e.target.value)
                }}
              />
            </form>
          </div>
          <div className="fa-2x mx-4">
            <FontAwesomeIcon icon="shopping-bag" />
              <span className="badge badge-pill badge-success">{count}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

/*
export const Greeting = (user) => {
  const isLoggedIn = user.isLoggedIn;
  if (isLoggedIn) {
    return <UserLogin />;
  }
  return <UserRegister />;
}

export const UserLogin = (login) => {
  return (
    <div>
      <button class="btn btn-info btn-sm" onClick={login.onClick}>
        Login
      </button>
      <button class="btn btn-info btn-sm">
        Profile
      </button>
    </div>
  )
}

export const UserRegister = () => {
  return (
    <button className="btn btn-info btn-sm">
        Inscription
    </button>
  )
}
*/

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
}

export const Card = props => {
  const { product, addToCart, count } = props
  return (
    <div className="col-sm-4 mb-5">
      <div className="card">
        <img src={process.env.PUBLIC_URL + `/assets/images/${product.category}/${product.image}` } alt={product.name} width="220" height="170" />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{product.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>€{product.price}/{product.unit}</p>
              <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={`#${product.ref}`}>Voir produit</button>
            </div>
          </div>
        </div>
      </div>
      <Modal product={product} addToCart={addToCart} count={count}/>
    </div>
  );
}

export const Modal = ({ product, addToCart, count }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="modal fade" id={product.ref} data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{product.name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-4">
              <img src={process.env.PUBLIC_URL + `/assets/images/${product.category}/${product.image}` } alt={product.name} width="220" height="170" />
              </div>
              <div className="col-sm">
                <p className="lead">
                  lorem is jhgfdkjhgfd lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <h3 className="price">€{product.price}/{product.unit}</h3>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary" onClick={() => setQuantity(count > 1 ? count - 1 : 1)}>-</button>
                    <span className="btn btn-light qty">{quantity}</span>
                  <button type="button" className="btn btn-secondary" onClick={() => setQuantity(count + 1)}>+</button>
                </div>
                <br/>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => addToCart(count + 1)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const List = props => {
  const { data, addToCart, count} = props
  return (
    <div className="col-sm">
      <div className="row">
        {data.map(product => <Card key={product.ref} product={product} addToCart={addToCart} count={count}/>)}
      </div>
    </div>
  );
}