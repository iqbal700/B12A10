import React from 'react';
import Slider from '../components/Slider';
import PopularSection from '../components/PopularSection';
import TipsCare from './TipsCare';
import Vat from './Vat';

const Home = () => {

    return (
        <div>
            <Slider> </Slider>
            <PopularSection></PopularSection>
            <TipsCare></TipsCare>
            <Vat></Vat>
        </div>
    );
};

export default Home;   