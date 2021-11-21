import Head from 'next/head';

import Nav from '@/organisms/header';
import Footer from '@/organisms/footer';
import Categories from '@/organisms/categories';
import Sidebar from '@/organisms/sidebar';

function Layout({ children, title, categories = false }) {
  return (
    <div className='min-w-full'>
      <Head>
        <title>{title}</title>
      </Head>

      <div className='flex flex-row'>
        <div className='flex flex-col h-screen w-full md:w-5/6'>
          <div>
            <Nav />
            {categories ? <Categories /> : ''}
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {children}
          </div>
          <Footer />
        </div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Layout