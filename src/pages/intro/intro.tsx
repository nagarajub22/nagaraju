import './intro.css';
import TITLES from '../../titles';
import { useEffect, useState } from 'react';
import HandWave from '../../common/HandWave';

export function IntroPage() {

    const [fade, setFade] = useState(false);

    useEffect(() => {
        return () => {
            setFade(true);
        };

    }, []);

    return (
        <section className={fade ? 'fade-out': ''}>
            <div>
                <h2>{TITLES.INTRO_TITLE}</h2>
                <HandWave/>
            </div>
        </section>
    );
}
