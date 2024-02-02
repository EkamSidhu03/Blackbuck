// src/containers/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersSuccess } from '../redux/actions';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import OrderList from '../components/OrderList';

const Dashboard = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://api.example.com/orders');
        const data = await response.json();
        dispatch(fetchOrdersSuccess(data));
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [dispatch]);

  return (
    <Layout>
      <Sidebar />
      <div>
        <h2>Dashboard</h2>
        {loading ? (
          <p>Loading orders...</p>
        ) : (
          <OrderList orders={orders} />
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
