// src/containers/OrderPage.js
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import OrderList from '../components/OrderList';
import api from '../services/api';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.getOrders();
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Layout>
      <div>
        <h2>Order Page</h2>
        {loading ? (
          <p>Loading orders...</p>
        ) : (
          <OrderList orders={orders} />
        )}
      </div>
    </Layout>
  );
};

export default OrderPage;
