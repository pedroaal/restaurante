const GridLayout = ({ children }) => {
  return (
    <div className="flex-1 overflow-y-auto" >
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-2'>
        {children}
      </div>
    </div >
  )
}

export default GridLayout