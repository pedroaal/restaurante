const ContentLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      {children}
    </div>
  )
}

export default ContentLayout