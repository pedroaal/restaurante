const Button = ({ title, type = 'button', action = null }) => (
  <button className="btn bg-black text-white mx-auto" type={type} onClick={action}>{title}</button>
)

export default Button