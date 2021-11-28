import { useState } from "react";
import { baseAPI } from '@config/api';
import { getMins } from "@/utils/functions";
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
  const [empty, setEmpty] = useState(false);

  const getOrders = () => {
    console.log('getting...')
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
          getOrders()
        }, getMins(2));
      })
  }

  if (orders.length <= 0 && !empty) {
    getOrders()
  }

  return (
    <Layout title='Ordenes'>
      {
        orders.length > 0 ?
          orders.map(order => (
            <Order order={order} key={order._id} order_id={order._id} getOrders={getOrders} />
          )) :
          'Sin ordenes'
      }
    </Layout>
  )
}

export default Orders