import React, { useEffect, useState } from 'react';
import NavBar from '../layouts/NavBar';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('default');
  const [demoProduct , setDemoProduct] = useState({});

  // Sample colors for demonstration (since colors aren't in the API data)
  const colors = [
    { name: 'default', hex: '#D4A76A' },
    { name: 'black', hex: '#333333' },
    { name: 'blue', hex: '#3A5162' },
    { name: 'green', hex: '#DBDFCD' },
    { name: 'red', hex: '#E9636E' }
  ];

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log("get data");
        setDemoProduct(data);
      })
      .catch(error => console.error(error))
    }, []);

  // Use passed product or fallback to demo product
  const displayProduct = demoProduct;

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleColorSelect = (colorName) => {
    setSelectedColor(colorName);
  };

  // Format price to always show 2 decimal places
  const formatPrice = (price) => {
    return price ? price.toFixed(2) : "0.00";
  };

  // Calculate monthly payment (demo calculation)
  const monthlyPayment = displayProduct.price ? (displayProduct.price / 6).toFixed(2) : "0.00";

  // Function to render stars based on rating
  const renderStars = (rating) => {
    if (!rating) return null;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }

    return stars;
  };

  return (
    <>
    <NavBar></NavBar>
    <div className="px-6 p-4">
      <div className="text-sm breadcrumbs mb-4">
        <ul className="flex gap-2 text-gray-500">
          <li>Store</li>
          <li>/</li>
          <li>{displayProduct.category || "Category"}</li>
          <li>/</li>
          <li>{displayProduct.id || "Product"}</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="bg-gray-100 p-6 rounded-lg mb-4 flex items-center justify-center">
            <img
              src={displayProduct.image || "/api/placeholder/400/400"}
              alt={displayProduct.title || "Product Image"}
              className="max-w-full max-h-80 object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-100 p-2 rounded-lg cursor-pointer">
                <img src="/api/placeholder/80/80" alt={`Product thumbnail ${index + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{displayProduct.title || "Product Title"}</h1>
          <p className="text-gray-600 mb-4">
            {displayProduct.description || "No description available"}
          </p>

          {/* Rating */}
          {displayProduct.rating && (
            <div className="flex items-center mb-6">
              <div className="flex">
                {renderStars(displayProduct.rating.rate)}
              </div>
              <span className="text-gray-500 ml-2">({displayProduct.rating.count || 0})</span>
            </div>
          )}

          {/* Price */}
          <div className="mb-6">
            <p className="text-xl font-bold">${formatPrice(displayProduct.price)} or ${monthlyPayment}/month</p>
            <p className="text-sm text-gray-500">
              Suggested payments with 6 months special financing
            </p>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <p className="font-medium mb-3">Choose a Color</p>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.name ? 'border-blue-500' : 'border-transparent'
                    }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => handleColorSelect(color.name)}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <div className="flex items-center">
              <button
                className="w-8 h-8 bg-gray-100 rounded-l flex items-center justify-center"
                onClick={decrementQuantity}
                aria-label="Decrease quantity"
              >
                —
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 h-8 bg-gray-100 text-center"
              />
              <button
                className="w-8 h-8 bg-gray-100 rounded-r flex items-center justify-center"
                onClick={incrementQuantity}
                aria-label="Increase quantity"
              >
                +
              </button>

              <div className="ml-4 text-sm">
                <p className="text-orange-500">
                  {displayProduct.rating && displayProduct.rating.count
                    ? `Only ${displayProduct.rating.count} items Left!`
                    : "Limited stock available!"}
                </p>
                <p>Don't miss it</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="bg-green-900 text-white py-2 px-6 rounded-full flex-1">
              Buy Now
            </button>
            <button className="border border-gray-300 py-2 px-6 rounded-full flex-1">
              Add to Cart
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border-t pt-4">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full mr-2">
                <span className="text-orange-500">🚚</span>
              </div>
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-blue-500">Enter your Postal code for Delivery Availability</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-orange-100 p-2 rounded-full mr-2">
                <span className="text-orange-500">🔄</span>
              </div>
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-sm">
                  Free 30days Delivery Returns. <span className="text-blue-500">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;