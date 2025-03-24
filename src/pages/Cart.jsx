import React from 'react';
import NavBar from '../layouts/NavBar';

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: 'Fifa 19',
      platform: 'PS4',
      price: 44.00,
      quantity: 2,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    },
    {
      id: 2,
      name: 'Glacier White 500GB',
      platform: 'PS4',
      price: 249.99,
      quantity: 1,
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
      id: 3,
      name: 'Platinum Headset',
      platform: 'PS4',
      price: 119.99,
      quantity: 1,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    }
  ];

  const calculateItemTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const shippingCost = 5.00;
  const totalCost = (parseFloat(calculateSubtotal()) + shippingCost).toFixed(2);

  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
        {/* Left side - Cart Items */}
        <div className="w-full md:w-2/3 p-6 bg-white">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-700">Shopping Cart</h2>
            <span className="text-md text-gray-600">{cartItems.length} Items</span>
          </div>

          <div className="mt-6">
            {/* Headers */}
            <div className="grid grid-cols-12 text-sm text-gray-500 uppercase mb-2">
              <div className="col-span-6">Product Details</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {/* Cart Items */}
            {cartItems.map(item => (
              <div key={item.id} className="grid grid-cols-12 items-center py-4 border-b">
                <div className="col-span-6 flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-blue-500 text-sm">{item.platform}</p>
                    <button className="text-xs text-gray-500 mt-1">Remove</button>
                  </div>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                  <button className="text-gray-500 px-2">−</button>
                  <input
                    type="text"
                    value={item.quantity}
                    className="w-8 text-center border mx-1"
                    readOnly
                  />
                  <button className="text-gray-500 px-2">+</button>
                </div>
                <div className="col-span-2 text-center">£{item.price.toFixed(2)}</div>
                <div className="col-span-2 text-right">£{calculateItemTotal(item.price, item.quantity)}</div>
              </div>
            ))}

            {/* Continue Shopping Button */}
            <div className="mt-6">
              <button className="flex items-center text-blue-500 text-sm">
                <span className="mr-2">←</span>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Order Summary */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6">
          <div className="bg-gray-100 p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Order Summary</h2>

            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="uppercase font-medium text-sm">Items {cartItems.length}</span>
                <span>£{calculateSubtotal()}</span>
              </div>
            </div>

            <div className="border-t border-b py-4 mb-4">
              <div className="mb-2 uppercase font-medium text-sm">Shipping</div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center justify-between w-full">
                  <span>Standard Delivery - £5.00</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="uppercase font-medium text-sm mb-2">Promo Code</div>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter your code"
                  className="flex-grow p-2 text-sm"
                />
                <button className="bg-red-400 text-white px-4 py-2 text-sm">
                  APPLY
                </button>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="uppercase font-medium text-sm">Total Cost</span>
                <span className="font-bold">£{totalCost}</span>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 uppercase font-medium">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;