import { useEffect } from "react";
import { baseAPI } from '@config/api';
import { getMins } from "@/utils/functions";
import { useSession } from "next-auth/client";

import Layout from "@layouts/layout";
import Order from "@molecules/order";

const Orders = () => {
  const [session] = useSession();

  useEffect(() => {
    getOrders()
    return () => {
      clearAllTimers()
    }
  }, [])

  var timers = [];

  function clearAllTimers() {
    while (timers.length) {
      clearTimeout(timers.pop());
    }
    return
  }

  const getOrders = () => {
    fetch(`${baseAPI}order`)
      .then(res => res.json())
      .then(data => {
        clearAllTimers()
        const t = setTimeout(() => {
          getOrders()
        }, getMins(2))
        timers.push(t);
      })
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