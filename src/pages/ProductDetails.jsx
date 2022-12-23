import { Link, useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import productdata from '../data/productdata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {
    const {addItem} = useCart();
    const notify = () => toast("Add to card!");
    const {id} = useParams();
    const detailItems = productdata.find(p => p.id == id);
  return (
  <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={detailItems.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">{detailItems.title}</h1>
      <p className="lead">{detailItems.description}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <button onClick={()=>{notify(addItem(detailItems))}} className="btn btn-warning"><span className='text-dark'>Add to card</span></button>
        <Link to="/products" type="button" className="btn btn-outline-secondary btn-lg px-4">Back</Link>
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
</div>

  )
}

export default ProductDetails