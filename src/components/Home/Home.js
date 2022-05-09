import React from 'react';
import AllPackages from '../AllPackages/AllPackages';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Footer></Footer>
        </div>
    );
};

export default Home;