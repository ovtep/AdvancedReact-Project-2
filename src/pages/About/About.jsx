import React from 'react';
import Layout from '../../components/Layout';

function About() {
    return(
        <div>
            <Layout>
                <div className="text-center py-2">
                    <h1>Despre noi</h1>
                </div>
                
                <div className="px-5">
                    <h5>GaraCuVechituri</h5>
                    <p>O companie noua pe piata din Romania, gata sa dea lovitura marilor jucatori prin preturi accesibile de producator. Printre brandurile noastre regasim 0led, PIXELDEAD, Digital Starion.</p>
                    <p>Ne angajam sa oferim o mare competitivitate nemaivazuta, vom lucra 12 ore pe zi pentru a va oferi cele mai bune servicii la cele mai mici preturi, in timp ce altii lucreaza 40 ore pe saptamana noi vrem sa aratam lumii ca se poate lucra si 60 si chiar 80 daca nu chiar 100.
                    </p>
                    <p>In timp ce altii lucreaza de acasa, noi lucram tot de acasa pentru ca noi consideram biroul acasa.</p>
                </div>
    

            </Layout>
        </div>
    );
}

export default About;