import { useContext, useEffect, useState } from 'react';
import Card from './Card';
import Search from './Search';
import CardShimmer from './CardShimmer';
import { useOutletContext } from 'react-router';
import { ThemeContext } from '../contexts/ThemeContext';
import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [query, setQuery] = useState('');
  // const [isDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

  // const theme = useOutletContext();
  // console.log(theme);
  // const [isDark] = useOutletContext();

  // const a = useContext(ThemeContext);
  // console.log(a);
  // const [isDark] = useContext(ThemeContext);
  // const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // useEffect(() => {
  //   window.addEventListener('resize', (e) => {
  //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  //   });
  // }, []);
  // const windowSize = useWindowSize();

  const [isDark] = useTheme();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(({ products }) => {
        setProductsData(products);
      });
  }, []);
  return (
    <main className={isDark ? 'dark' : ''}>
      {/* <h1 style={{ textAlign: 'center' }}>
        {windowSize.width} x {windowSize.height}
      </h1> */}
      <Search setQuery={setQuery} />
      <div className="products-container">
        {productsData[0] === undefined ? (
          <CardShimmer />
        ) : (
          productsData
            .filter((product) => {
              return product.tags.some((tag) => tag.toLowerCase().includes(query));
            })
            .map((product) => {
              return (
                <Card
                  url={product.thumbnail}
                  alt={product.description}
                  product={product.title}
                  brand={product.brand}
                  price={product.price}
                  key={product.id}
                  id={product.id}
                  data={product}
                />
              );
            })
        )}
      </div>
    </main>
  );
};

export default Home;
