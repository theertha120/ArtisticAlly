import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ImageGrid from './ImageGrid';
import Login from './login'; // Import the Login component
import AboutUs from './AboutUs';
import BackgroundSlider from './bgm';
function Get_Started() {
    const [showLogin, setShowLogin] = useState(false); // State to control the view

    const handleWelcomeClick = () => {
        setShowLogin(true); // Switch to the Login view when button is clicked
    };

    return (
        <div>
            {showLogin ? (
                <>
                    <BackgroundSlider />
                    <Login /> // Render Login component if showLogin is true
                </>
            ) : (
                <main style={{ padding: '0 50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90vh' }}>
                        <ImageGrid />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', height: '100%' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'right', maxWidth: '350px', color: '#fff' }}>
                                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>ArtisticAlly</span> <span style={{ fontFamily: 'Montserrat, sans-serif' }}>: A platform to connect with artists and job opportunities!</span>
                            </div>
                            <Button
                                variant="contained"
                                style={{
                                    fontSize: '3rem',
                                    background: 'linear-gradient(45deg, #9C27B0 30%, #2196F3 90%)', // Purple to blue gradient
                                    color: '#fff',
                                    borderRadius: '50px',
                                    textTransform: 'capitalize',
                                    marginRight: '0',
                                    fontFamily: 'Montserrat, sans-serif',
                                }}
                                onClick={handleWelcomeClick} // Add click handler
                            >
                                Welcome!
                            </Button>
                        </div>
                    </div>
                    <AboutUs />
                </main>
            )}
        </div>
    );
}

export default Get_Started;
