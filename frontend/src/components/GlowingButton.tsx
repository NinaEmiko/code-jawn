import React, { FC, useEffect, useState } from 'react';

interface GlowingButtonProps {
    buttonText: string;
    buttonColor: string;
    buttonPress: () => void;
}

const GlowingButton: FC<GlowingButtonProps> = ({ buttonText, buttonColor, buttonPress }) => {
    const [glowIntensity, setGlowIntensity] = useState(10);
    const [glowOpacity, setGlowOpacity] = useState(1);

    useEffect(() => {
        const glowInterval = setInterval(() => {
            setGlowIntensity((prev) => (prev === 30 ? 10 : 30)); // Toggle between 10 and 30
        }, 800);

        const opacityInterval = setInterval(() => {
            setGlowOpacity((prev) => (prev === 1 ? 0.5 : 1)); // Toggle opacity between 1 and 0.5
        }, 800);

        return () => {
            clearInterval(glowInterval);
            clearInterval(opacityInterval);
        };
    }, []);

    const handlePress = () => {
        buttonPress();
    };

    return (
        <div className="button-container">
            <button
                onClick={handlePress}
                style={{
                    // textShadow: `${glowIntensity}px ${glowIntensity}px ${buttonColor}`,
                    color: "#12edd8",
                    opacity: glowOpacity,
                    transition: 'all 1s ease-in-out',
                }}
                className="glowing-button"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default GlowingButton;
