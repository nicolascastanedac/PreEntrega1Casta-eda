import React from 'react';

const ItemListContainer = () => {
    return (
        <div
          style={{
            backgroundColor: '#f8f8f8',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: '#007bff',
              fontSize: '24px',
              margin: '0',
            }}
          >
            ¡Bienvenido a Palmar!
          </h2>
          <p
            style={{
              color: '#333',
              fontSize: '18px',
              margin: '10px 0',
            }}
          >
            Explora nuestra amplia selección de productos y disfruta de una experiencia de compra única.
          </p>
        </div>
      );
    }

export default ItemListContainer;