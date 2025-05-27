//import Dashboard from "./pages/Dashboard";
import React from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
//import Orders from "./pages/Orders";
//import Customers from "./pages/Customers";
//import NotFound from "./pages/NotFound";
//import ErrorPage from "./components/ErrorPage";
//import MainLayout from "./layouts/MainLayout";
//import Login from "./pages/auth/Login";
//import Register from "./pages/auth/Register";
//import Forgot from "./pages/auth/Forgot";
//import AuthLayout from "./layouts/AuthLayout";
import { Suspense } from "react";
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const ErrorPage = React.lazy(() => import("./components/ErrorPage"))
const Users = React.lazy(() => import("./pages/Users"))
const Products = React.lazy(() => import("./pages/Products"))
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

export default function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Routes>
      <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Dashboard />} />
          <Route path="/Users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* Error Pages*/}
          <Route path="/error-400" element={<ErrorPage errorCode={400} title="Bad request"/>} />
          <Route path="/error-401" element={<ErrorPage errorCode={401} title="Unauthorized"/>} />
          <Route path="/error-403" element={<ErrorPage errorCode={403} title="Forbidden"/>} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
}
