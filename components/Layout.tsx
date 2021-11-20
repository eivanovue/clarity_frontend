
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
   children: React.ReactNode;
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <>
      <Navbar/>
      {children}
      {/* <div>asd</div> */}
    </>
  )
}

export default Layout;