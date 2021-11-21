import { connect } from 'react-redux';

import Producto from '@/molecules/product';
import GridLayout from '@/components/layouts/gridLayout';

const GridProducts = ({ filtered }) => {
  return (
    <GridLayout>
      {filtered.map(producto => (
        <Producto producto={producto} key={producto.name} />
      ))}
    </GridLayout>
  )
}

const mapStateToProps = state => ({
  filtered: state.productReducer.products_filtered,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(GridProducts);