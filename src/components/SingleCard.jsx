import React from 'react'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
const SingleCard = ({photo,title,desc,productdata,id}) => {
  const {addItem} = useCart();
  const notify = () => toast("Add to card!");
  const navigation = useNavigate();
  return (
    
    <div className='col-12 col-sm-6 col-md-3 '>
        <div className="card text-bg-info">
        <img src={photo} height="300" className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title.substring(0, 20)}</h5>
            <p className="card-text">{desc.substring(0, 30)}</p>
            <button onClick={()=>{
              navigation('/cart');
              notify(addItem(productdata))}} className="btn btn-success"><span className='text-dark'>Add to card</span></button>
            <Link to={`/products/${id}`} className=" ms-3 btn btn-dark">Read More</Link>
            <ToastContainer position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"/>
        </div>
        </div>
    </div>
  )
}

export default SingleCard