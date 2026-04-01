import { X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartSidebar({ isOpen, setIsOpen, cartItems, setCartItems }) {

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[320px] bg-white z-50 shadow-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-[#3C2012] flex items-center gap-2">
                <ShoppingCart size={18} />
                Your Cart
              </h2>
              <button onClick={() => setIsOpen(false)}>
                <X />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border p-3 rounded-lg"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded"
                    />

                    {/* Info */}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#3C2012]">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ₹ {item.price}
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-4 border-t">
                <button className="w-full bg-[#3C2012] text-white py-3 rounded-lg hover:bg-amber-500 transition font-semibold">
                  Checkout
                </button>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}