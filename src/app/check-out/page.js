"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ✅ Calculate total
  const totalPrice = () => {
    return cart.reduce(
      (sum, item) => sum + item.price * (item.qty || 1),
      0
    );
  };

  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ✅ WhatsApp Order
  const whatsappSubmit = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const phoneNumber = "918826544443";

    const cartItems = cart
      .map(
        (item) =>
          `• ${item.name} | Qty: ${item.qty || 1} | ₹${item.price * (item.qty || 1)}`
      )
      .join("\n");

    const message = `
*New Order - Bar Bending Machine Importer*

👤 Customer Details
Name: ${form.firstName} ${form.lastName}
Phone: ${form.phone}
Email: ${form.email}
📍 Address${form.address}${form.city}, ${form.state}, ${form.country}

📦 Order Items
${cartItems}

💰 Total: ₹${totalPrice()}

📝 Notes
${form.notes}
`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-[#f8f5f2] min-h-screen">
      <div className="max-w-7xl mx-auto py-10 px-4 grid lg:grid-cols-[2fr_1fr] gap-12">
        <div className="bg-white p-8 shadow-lg rounded-xl border border-amber-100">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#3C2012]">
            Billing Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.keys(form).map((key) =>
              key !== "notes" ? (
                <div key={key} className="flex flex-col gap-1 text-black">
                  <label className="text-sm text-[#3C2012] capitalize">
                    {key}
                  </label>

                  <input
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    placeholder={`Enter ${key}`}
                    className="border border-amber-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition"
                  />

                </div>
              ) : null
            )}
          </div>

          <div className="mt-6 flex flex-col gap-1 text-black">
            <label className="text-sm text-[#3C2012]">
              Order Notes
            </label>

            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Any special instructions..."
              className="border border-amber-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              rows={4}
            />
          </div>
        </div>

        <div className="bg-white p-8 shadow-xl rounded-xl h-fit sticky top-24 border border-amber-100">
          <h2 className="text-xl font-semibold mb-6 text-[#3C2012]">
            Your Order
          </h2>

          <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-3">

                  <Image
                    src={item.image?.src || item.image}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="rounded-md border border-amber-200"
                  />

                  <div>
                    <p className="text-sm font-medium text-[#3C2012]">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-800">
                      Qty: {item.qty || 1}
                    </p>
                  </div>

                </div>

                <p className="font-medium text-sm text-[#3C2012]">
                  ₹{item.price * (item.qty || 1)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-amber-200 mt-8 pt-6 space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="text-[#3C2012]">₹{totalPrice()}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-[#3C2012]">
              <span>Total</span>
              <span className="text-amber-500">₹{totalPrice()}</span>
            </div>
          </div>

          <button onClick={whatsappSubmit}
            className="w-full mt-8 bg-[#3C2012] hover:bg-amber-500 text-white py-4 font-semibold rounded-lg transition"
          >
            PLACE ORDER ON WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
}