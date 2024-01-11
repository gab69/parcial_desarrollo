"use client"; 

import React, { useState, useEffect, useCallback } from 'react';
import ProductList from '../components/ProductList'; // Importa el componente ProductList
import Navega from '../components/Navega'; // Importa el componente Navega

// Datos del producto que se mostrará en la lista
const product = {
  id: 1,
  name: 'Smartphone XIAOMI Redmi 12C 6.7"',
  description: '4GB RAM 128GB Storage',
  imageSrc: '/choclito.PNG',
  originalPrice: '649',
  discountedPrice: '449',
  finalPrice: '419',
};

const productsPerPage = 20; // Número de productos por página
const totalPages = 5; // Total de páginas disponibles

// Función para generar una lista de productos basada en el número de página
const generateProductList = (pageNumber) => {
  return Array.from({ length: pageNumber * productsPerPage }, () => product);
};

function Page() {
  // Estados para la página actual y la lista de productos
  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar la página actual
  const [productList, setProductList] = useState(generateProductList(1)); // Estado para la lista de productos

  // Función para cargar más productos cuando se desplace hacia abajo
  const loadMoreProducts = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1); // Incrementa la página actual
    }
  }, [currentPage]);

  // Efecto para actualizar la lista de productos cuando cambia la página actual
  useEffect(() => {
    setProductList(generateProductList(currentPage)); // Actualiza la lista de productos
  }, [currentPage]);

  // Efecto para manejar el desplazamiento de la ventana y cargar más productos
  useEffect(() => {
    const handleScroll = () => {
      // Verifica si el usuario ha desplazado hasta el final de la página
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        loadMoreProducts(); // Carga más productos
      }
    };

    window.addEventListener('scroll', handleScroll); // Agrega el manejador de eventos de desplazamiento

    // Función de limpieza para eliminar el manejador de eventos
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMoreProducts]);

  return (
    <>
      <Navega /> {/* Componente de navegación */}
      <br/><br/><br/><br/><br/>
      <ProductList products={productList} /> {/* Lista de productos */}
      <footer className="text-center p-4">
        Mostrando los 100 productos {/* Pie de página */}
      </footer>
    </>
  );
}

export default Page; 
