import './intro.css';
import TITLES from '../../titles';
import HandWave from '../../assets/hand_wave.svg';
import { useEffect, useState } from 'react';

export function IntroPage() {

    const [fade, setFade] = useState(false);

    useEffect(() => {

        return () => {
            setFade(true);
            console.log('Component Unmount');
        };

    }, []);

    return (
        <section className={fade ? 'fade-out': ''}>
            <h2>{TITLES.INTRO_TITLE} <img src={HandWave} alt=""/></h2>
        </section>
    );
}