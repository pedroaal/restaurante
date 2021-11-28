import { useSelector, useDispatch } from "react-redux";

const QR = () => {
  const store_id = useSelector(state => state.cartReducer.store_id)
  const table = useSelector(state => state.cartReducer.table)

  // captureImage() {
  //   const context = this.canvas.getContext("2d")
  //   context.drawImage(this.videoStream, 0, 0, 800, 600)
  //   const image = this.canvas.toDataURL('image/jpeg', 0.5)
  //   return image
  // }

  return (
    <div>
      {/* <video
        ref={(stream) => { this.videoStream = stream }}
        width='800'
        height='600'
        style={{ display: 'none' }}>
      </video>
      <canvas
        ref={(canvas) => { this.canvas = canvas }}
        width='800'
        height='600'
        style={{ display: 'none' }}>
      </canvas> */}
    </div >
  )
}

export default QR