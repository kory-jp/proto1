import React, { memo } from 'react'

import Footer from '../organisms/layout/Footer';
import Header from '../organisms/layout/Header'

export const DefaultLayout = memo((props)=> {
  const {children} = props;
  return(
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
})

export default DefaultLayout;
