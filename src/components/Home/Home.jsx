import React from 'react';
import Banner from '../Banner/Banner';
import AboutSection from '../AboutSection/AboutSection';
import SucceessSection from '../SuccessSection/SuccessSection';
import Promotion from '../Promotion/Promotion';
import Review from '../Review/Review';

const Home = () => {
    document.title="Home"
    return (
        <>
        <Banner></Banner>
        <AboutSection></AboutSection>
        <SucceessSection></SucceessSection>
        <Review></Review>
        <Promotion></Promotion>
        
        </>
    );
};

export default Home;