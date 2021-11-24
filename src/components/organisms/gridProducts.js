import { useSelector } from 'react-redux';

import Producto from '@molecules/product';
import GridLayout from '@layouts/gridLayout';

const GridProducts = () => {
  const filtered = useSelector(state => state.productReducer.products_filtered)

  return (
    <GridLayout>
      {filtered.map(producto => (
        <Producto producto={producto} key={producto._id} />
      ))}
    </GridLayout>
  )
}

export default GridProducts;