import { useState } from "react";
import { baseAPI } from '@config/api';
import { useSession } from "next-auth/client";

import { setOrders } from '@/redux/actions/orders'
import { useSelector, useDispatch } from "react-redux";

import Layout from "@layouts/layout";
import Order from "@molecules/order";

function Orders() {
  const [session] = useSession();

  const dispatch = useDispatch()
  const orders = useSelector(state => state.orderReducer.orders)

  const [loading, setLoading] = useState(orders.length ? false : true);

  const saveOrders = () => {
    fetch(`${baseAPI}order`)
      .then(res => res.json())
      .then(data => {
        dispatch(setOrders(data))
        setLoading(false);
      })
  }

  if (orders.length <= 0) {
    console.log('getting...')
    saveOrders()
  }

  return (
    <Layout title='Ordenes'>
      {orders.map(order => (
        <Order order={order} key={order._id} />
      ))}
    </Layout>
  )
}

export default Orders