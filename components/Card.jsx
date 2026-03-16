import { Link } from 'react-router';

const Card = ({ url, alt, product, brand, price, id, data }) => {
  return (
    <Link className="card" to={`/${id}`} state={ data }>
      <img src={url} alt={alt} />
      <h3>{product}</h3>
      <h4>{brand}</h4>
      <p>
        <b>$ {price}</b>
      </p>
    </Link>
  );
};

export default Card;
