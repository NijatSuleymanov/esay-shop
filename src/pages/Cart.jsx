import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    cartTotal,
    emptyCart
  } = useCart();
  if (isEmpty) return <div className="d-flex align-items center justify-content-center">
  <img src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif" alt="" />
  </div>
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">photo</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">del</th>
          </tr>
        </thead>
        <tbody>

          {items.map((fd,i)=>(
            <tr>
            <th scope="row">{i+1}</th>
            <td><img width={50} src={fd.image} alt={fd.title} /></td>
            <td>{fd.title}</td>
            <td>{fd.price * fd.quantity}$</td>
            <td>
              <button className="btn btn-primary"  onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>-</button>
              <span className="mx-3">{fd.quantity}</span>
              <button className="btn btn-primary" onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>+</button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => removeItem(fd.id)}>Del</button>
            </td>
          </tr>
          ))}
          
        </tbody>
      </table>
      <h2 className="mt-5">Total Price:{cartTotal}$</h2>
      <button className="mt-3 btn btn-danger" onClick={()=>{emptyCart()}}>Empty Cart</button>
    </>
  );
};

export default Cart;