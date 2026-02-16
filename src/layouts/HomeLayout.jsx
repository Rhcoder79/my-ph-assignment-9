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
    {/* Outlet এখানে আপনার পেইজের মেইন কন্টেন্ট দেখাবে */}
    <section className="main">
        <Outlet></Outlet>
    </section>

    {/* Hero Section */}
    <section className="hero-container ">
        <div
            className="hero min-h-125" 
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary px-8">Get Started</button>
                </div>
            </div>
        </div>
    </section>
</main>
            <footer>
      <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;