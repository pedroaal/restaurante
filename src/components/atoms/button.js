import classNames from 'classnames';

const Button = ({ children, type = 'button', action = null, className = '' }) => {
  const classes = classNames('btn bg-black text-white mx-auto hover:bg-gray', className)
  return (
    <button className={classes} type={type} onClick={action}>{children}</button>
  )
}

export default Button