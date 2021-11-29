import { QrReader } from '@blackbox-vision/react-qr-reader';

import { useSelector, useDispatch } from "react-redux";
import { setLocal } from '@/redux/actions/cart';

import { toast } from "react-toastify";

toast.configure()

const QR = () => {
  const dispatch = useDispatch()
  const store_id = useSelector(state => state.cartReducer.store_id)
  const table = useSelector(state => state.cartReducer.table)

  const onFind = (result, error) => {
    if (!!result) {
      const data = JSON.parse(result?.text)
      dispatch(setLocal(data));
    }
    if (!!error) {
      console.info(error);
    }
  }

  return (
    <div>
      {
        store_id == 0 || table == 0 ?
          <QrReader
            onResult={(result, error) => onFind(result, error)}
            style={{ width: '100%' }}
          /> :
          'Continuar'
      }
      <p>result: {store_id}</p>
    </div >
  )
}

export default QR