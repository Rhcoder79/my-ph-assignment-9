import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useNavigation } from 'react-router';
import Loading from '../pages/Loading';


const HomeLayout = () => {
    const { state } =useNavigation();
    return (
        <div>
            <header>
              <Header></Header>
          
            </header>
            <main className="min-h-screen"> 
   
    <section className="main">
      {state=="loading"?<Loading />  : <Outlet></Outlet>} 
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