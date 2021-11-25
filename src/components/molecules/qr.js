import { useSelector, useDispatch } from "react-redux";

function QR() {
  const store_id = useSelector(state => state.cartReducer.store_id)
  const table = useSelector(state => state.cartReducer.table)

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        // setSource(newUrl);
      }
    }
  };

  return (
    <input
      accept="image/*"
      // className={classes.input}
      id="icon-button-file"
      type="file"
      capture="environment"
      onChange={(e) => handleCapture(e.target)}
    />
  )
}

export default QR