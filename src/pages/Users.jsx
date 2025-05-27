import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../Data/user.json';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        setUsers(usersData);
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="relative p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Users</h1>
            <button
                onClick={() => navigate('/FormUser')}
                className="mb-4 p-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
            >
                Add User
            </button>

            {/* Tabel Users */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-blue-100 text-left">
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">ID</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Name</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Username</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Email</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Phone</th>
                            <th className="py-3 px-6 text-sm font-bold text-gray-700">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-5.5 px-9.5 text-sm text-gray-600">{user.id}</td>
                                <td className="py-5.5 px-9.5 text-sm text-gray-600">{user.name}</td>
                                <td className="py-5.5 px-9.5 text-sm text-gray-600">{user.username}</td>
                                <td className="py-5.5 px-9.5 text-sm text-gray-600">{user.email}</td>
                                <td className="py-5.5 px-9.5 text-sm text-gray-600">{user.phone}</td>
                                <td className="py-5.5 px-9.5 text-sm text-gray-600">{user.age}</td>
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
                    disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                    className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}