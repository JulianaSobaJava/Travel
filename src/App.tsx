import React from 'react';
import './styles/global.scss';
import { Header } from './components/header';
import { Banner } from './components/banner';
import { Packages } from './components/value';
import { Services } from './components/service';
import { Footer } from './components/footer';
import { Gallery } from './components/gallery';
import { Testimonial } from './components/testimonials';
import { Contact } from './components/contact';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Packages />
            <Services />
            <Gallery/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
