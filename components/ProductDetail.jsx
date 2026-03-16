import { useContext, useEffect, useState } from 'react';
import { useLocation, useParams, useOutletContext } from 'react-router';
import ProductDetailShimmer from './ProductDetailShimmer';
import { ThemeContext } from '../contexts/ThemeContext';
import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';

const ProductDetail = () => {
  const id = useParams().product;

  function updateProductData(data) {
    setProductDetails({
      img: data.images[0],
      brand: data.brand,
      description: data.description,
      product: data.title,
      price: data.price,
      delivery: data.shippingInformation,
    });
  }
  // const location = useLocation();
  // console.log(location.state);

  const { state } = useLocation();
  // console.log(state);

  // const [isDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

  // const theme = useOutletContext();
  // console.log(theme);
  // const [isDark] = useOutletContext();

  // const [isDark] = useContext(ThemeContext);

  const [productDetails, setProductDetails] = useState(null);
  const [notFound, setNotFound] = useState(false);
  // const windowSize = useWindowSize();
  const [isDark] = useTheme();

  useEffect(() => {
    if (state) {
      updateProductData(state);
      return;
    }
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // setProductDetails({
        //   img: data.images[0],
        //   brand: data.brand,
        //   description: data.description,
        //   product: data.title,
        //   price: data.price,
        //   delivery: data.shippingInformation,
        // });
        updateProductData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, []);
  if (notFound) {
    return (
      <div className="error">
        <h1>Product Not Found</h1>
      </div>
    );
  }
  return (
    <main className={isDark ? 'dark' : ''}>
      {/* <h1 style={{ textAlign: 'center' }}>
        {windowSize.width} x {windowSize.height}
      </h1> */}
      <div className="productdetails-container">
        {productDetails === null ? (
          <ProductDetailShimmer />
        ) : (
          <>
            <div className="img-container">
              <img src={productDetails.img} alt={productDetails.description} />
            </div>
            <div className="product-details">
              <h2>{productDetails.product}</h2>
              <h3>{productDetails.brand}</h3>
              <p>{productDetails.description}</p>
              <p>
                <b>$ {productDetails.price}</b>
              </p>
              <p>{productDetails.delivery}</p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
