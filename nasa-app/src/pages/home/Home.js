import React from 'react';
import COVER from '../../asserts/coverimg.jpg';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="bg-cover h-screen" style={{ backgroundImage: `url(${COVER})` }}>
                <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h2 className="text-5xl font-bold my-8">Welcome to NASA Explorer!</h2>
                        <p className="text-lg">
                            Explore the wonders of the universe with NASA's APIs.
                            <br></br>We hope you enjoy exploring the universe with us!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
