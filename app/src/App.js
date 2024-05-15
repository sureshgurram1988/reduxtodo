import React, {useState} from 'react'
import {connect}  from 'react-redux'
import { add_to_cart, remove_from_cart } from './actions'

const App = ({cart, add_to_cart, remove_from_cart}) => {
  const[item, setItem] = useState('')
  const submitHandler = e => {
    e.preventDefault()
    if(item !== '') {
      add_to_cart({name: item})
      setItem('')
      
    }
    setItem('')
  }

  return (
    <div>
      <p>Totoal Products {cart.length}</p>
      <form onSubmit={submitHandler}>
        <input type='text' name="name" value={item} onChange={(e) => setItem(e.target.value)}/>
        <button >Add to cart</button>
      </form>
      {cart.map(item => {
        return(
          <p key={item.name}>{item.name} <button onClick={() => remove_from_cart(item.name)}>Remove</button></p>
        )
      })}
    </div>
  )
}


const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = {
  add_to_cart,
  remove_from_cart
};
export default connect(mapStateToProps, mapDispatchToProps)(App)
