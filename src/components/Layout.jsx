import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../components-styles/layout.module.css';
import Banner from './Banner'

const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
    <Banner/>
    <div className={styles['main-container']}>
    {children}
    </div>
    <Footer/>

    </>
)

}

export default Layout