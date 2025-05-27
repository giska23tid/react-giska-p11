import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import customersData from '../Data/customer.json';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        // Transformasi customer data menjadi format order dummy
        const transformedOrders = customersData.map((customer, index) => ({
            orderId: `O${(index + 1).toString().padStart(3, '0')}`,
            customerName: customer.name,
            product: `Product ${(index % 5) + 1}`, // contoh: Product 1-5
            quantity: Math.floor(Math.random() * 10) + 1,
            price: (Math.random() * 100).toFixed(2),
            status: ['Pending', 'Shipped', 'Delivered'][index % 3],
        }));

        setOrders(transformedOrders);
    }, []);

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="relative p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Customer (From Customers)</h1>
            <button
                onClick={() => navigate('/FormOrder')}
                className="mb-4 p-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
            >
                Add Customer
            </button>

            {/* Tabel Orders */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-blue-100 text-left">
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Order ID</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Customer Name</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Product</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Quantity</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Price</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrders.map((order) => (
                            <tr key={order.orderId} className="hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-6 text-sm text-gray-600">{order.orderId}</td>
                                <td className="py-3 px-6 text-sm text-gray-600">{order.customerName}</td>
                                <td className="py-3 px-6 text-sm text-gray-600">{order.product}</td>
                                <td className="py-3 px-6 text-sm text-gray-600">{order.quantity}</td>
                                <td className="py-3 px-6 text-sm text-gray-600">${order.price}</td>
                                <td className="py-3 px-6 text-sm text-gray-600">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-center">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(orders.length / ordersPerPage)}
                    className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
