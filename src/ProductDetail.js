import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { itemId } = useParams();

  // Find the product with the matching itemId
  const product = products.find((product) => product.id === parseInt(itemId));

  // Handle case when product is not found
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>Detalles del producto</h2>
      <div className="product-detail">
        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;