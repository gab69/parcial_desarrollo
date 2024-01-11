// Importamos React y el componente ProductCard.
import React from 'react';
import ProductCard from '../components/ProductCard'; 

// Definimos el componente ProductList, que recibe 'products' como prop.
const ProductList = ({ products }) => {
  // Renderizamos el componente.
  return (
    // Usamos la clase 'grid' para crear un diseño de cuadrícula.
    // Se ajusta a diferentes tamaños de pantalla 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Mapeamos cada producto en la lista de productos. */}
      {products.map((product) => (
        // Por cada producto, renderizamos un componente ProductCard.
        // Asignamos una 'key' única para cada elemento de la lista (importante en React para identificar cada elemento de forma eficiente).
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


export default ProductList;
