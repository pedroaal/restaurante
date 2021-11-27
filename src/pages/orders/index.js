import { useState } from "react";
import { baseAPI } from '@config/api';
import { useSession } from "next-auth/client";
import { useRouter } from 'next/router';

import { setOrders } from '@/redux/actions/orders'
import { useSelector, useDispatch } from "react-redux";

import Layout from "@layouts/layout";
import Order from "@molecules/order";

function Orders({ orders }) {
  const [session] = useSession();
  const router = useRouter()

  const dispatch = useDispatch()
  const orders = useSelector(state => state.orderReducer.orders)

  const [loading, setLoading] = useState(orders.length ? false : true);
  const [empty, setEmpty] = useState(false);

  const saveOrders = () => {
    fetch(`${baseAPI}order`)
      .then(res => res.json())
      .then(data => {
        if (data.length <= 0) {
          setEmpty(true)
        }
        dispatch(setOrders(data))
        setLoading(false);
        setTimeout(() => {
          setEmpty(false)
        }, 3600 * 2);
      })
  }

  if (orders.length <= 0 && !empty) {
    saveOrders()
  }

  setTimeout(() => {
    router.reload()
  }, 3600 * 2);

  return (
    <Layout title='Ordenes'>
      {
        orders.length > 0 ?
          orders.map(order => (
            <Order order={order} key={order._id} order_id={order._id} />
          )) :
          'Sin ordenes'
      }
    </Layout>
  )
}

export default Orders