import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  // Wir initialisieren es nicht direkt mit true, sondern setzen es im Effect
  const mountedRef = useRef(true); 

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    
    // WICHTIG: Ref beim Start des Effekts auf true setzen
    mountedRef.current = true; 

    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };

    return () => {
      // Wenn die Komponente stirbt, auf false setzen
      mountedRef.current = false;
    };
  }, [book.url]); // <--- HIER WAR DAS PROBLEM: Das Array fehlte!

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} alt={book.title} className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--wrapper skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
