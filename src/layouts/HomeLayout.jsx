import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const HomeLayout = () => {
    return (
        <div>
            <header>
              <Header></Header>
   
            </header>
            <main className="min-h-screen"> 
   
    <section className="main">
        <Outlet></Outlet>
    </section>

    {/* Hero Section */}
   
</main>
            <footer>
      <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;