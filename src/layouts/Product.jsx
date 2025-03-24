import React from 'react'

function Product() {

  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    },
  }

  return (
    <>
      <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-42 object-contain mb-4"
          />

          <div className="w-full">
            <h3 className="text-xl font-bold text-gray-800 truncate">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-2">by {product.category}</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-sm text-gray-600">{product.rating.rate} ({product.rating.count})</span>
            </div>

            <p className="text-lg font-bold mb-4">Rs. {product.price}</p>

            <div className="flex gap-2">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md w-1/2 hover:bg-blue-700 transition-colors">
                ADD TO BAG
              </button>
              <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded-md w-1/2 hover:bg-gray-100 transition-colors">
                WISHLIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product