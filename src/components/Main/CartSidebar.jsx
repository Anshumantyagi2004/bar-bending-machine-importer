import { X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CartSidebar({ isOpen, setIsOpen, cartItems, setCartItems }) {
  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQty = (index) => {
    const updated = cartItems.map((item, i) =>
      i === index ? { ...item, qty: (item.qty || 1) + 1 } : item
    );

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const decreaseQty = (index) => {
    const updated = cartItems
      .map((item, i) =>
        i === index ? { ...item, qty: (item.qty || 1) - 1 } : item
      )
      .filter((item) => item.qty > 0); // remove if qty 0

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-87 sm:w-100 bg-white z-50 shadow-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-b-gray-300">
              <h2 className="text-lg font-semibold text-[#3C2012] flex items-center gap-2">
                <ShoppingCart size={18} />
                Your Cart
              </h2>
              <button className="text-red-500 border border-red-200 hover:text-red-600 px-2 py-2 rounded-md bg-red-50 hover:bg-red-100" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 border p-3 rounded-lg">
                    <img
                      src={item.image.src || item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#3C2012]">
                        {item.name}
                      </p>

                      <div className="flex items-center gap-5 mt-1 text-black">
                        <p className="text-base text-gray-600 font-semibold">
                          ₹ {item.price}
                        </p>
                        <div className="flex items-center gap-2 ">
                          <button onClick={() => decreaseQty(index)}
                            className="hover:text-red-600 text-red-500 hover:bg-red-100 text-base px-2 py-0.5 border border-red-200 bg-red-50 rounded"
                          >
                            -
                          </button>

                          <span className="text-base">{item.qty || 1}</span>

                          <button onClick={() => increaseQty(index)}
                            className="hover:text-green-600 text-green-500 hover:bg-green-100 text-base px-2 py-0.5 border border-green-200 bg-green-50 rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => removeItem(index)}
                      className="text-red-500 hover:text-red-600 px-1 py-1 rounded-md bg-red-100 hover:bg-red-200">
                      <X size={18} />
                    </button>
                  </div>))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-4 border-t border-t-gray-300">
                <p className="mb-2 font-semibold text-lg flex justify-between text-black">Total: <span className="font-bold">₹ {total}</span></p>
                <Link href="/check-out" onClick={() => setIsOpen(false)} className="block text-center w-full bg-[#3C2012] text-white py-3 rounded-lg hover:bg-amber-500 transition font-semibold">
                  Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}