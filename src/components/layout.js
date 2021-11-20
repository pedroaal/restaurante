import Head from 'next/head';

import Nav from '@/organisms/header';
import Footer from '@/organisms/footer';
import Categories from '@/organisms/categories';
import Sidebar from '@/organisms/sidebar';

function Layout({children, title, categories=false}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className='flex flex-row'>
        <div className='flex flex-col h-screen sm:w-full md:w-5/6'>
          <div>
            <Nav />
            {categories ? <Categories /> : ''}
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-2'>
              {children}
            </div>
          </div>
          <Footer />
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default Layout