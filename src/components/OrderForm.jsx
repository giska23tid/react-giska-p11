import React from "react";

export default function OrderForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-pink-300 bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-pink-200 p-6 rounded-lg w-full max-w-md shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Add Order</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Order ID" className="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Customer Name" className="w-full border px-4 py-2 rounded"/>
          <select className="w-full border px-4 py-2 rounded">
            <option>Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <input type="number" placeholder="Total Price" className="w-full border px-4 py-2 rounded" />
          <input type="date" className="w-full border px-4 py-2 rounded" />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-pink-500 px-4 py-2 rounded">Cancel </button>
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
