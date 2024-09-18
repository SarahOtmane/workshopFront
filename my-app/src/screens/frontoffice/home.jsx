// src/pages/Home.jsx
import '../../css/frontoffice/home.css';
import TypeConsoleCard from '../../components/typeConsoleCard'; // Assure-toi que le chemin est correct
import ImageCarousel from '../../components/ImageCarousel'; // Assure-toi que le chemin est correct
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';

export default function Home() {
    const card = [
        {
            title: "GAMEBOY DMG",
            picture: image1,
            color: "red",
            classe: false,
            marginTop: "0px"
        },
        {
            title: "GAMEBOY COLOR",
            picture: image4,
            color: "blue",
            classe: false,
            marginTop: "0px"
        },
        {
            title: "ADVANCE SP",
            picture: image2,
            color: "purple",
            classe: false,
            marginTop: "0rem" // Ajouter marginTop uniquement à la première carte
        },
        {
            title: "GAMEBOY ADVANCE",
            picture: image3,
            color: "green",
            classe: true,
            marginTop: "0px" // Aucun margin pour les autres cartes
        }
    ];

    return (
        <main className="home">
            <div className="carousel-wrapper">
                <div className="carousel-container">
                    <ImageCarousel />
                </div>
            </div>
            <h2 className="cards-title">Nos Consoles</h2>
            <div className="cards-container">
                {card.map((card, index) => (
                    <TypeConsoleCard
                        key={index}
                        title={card.title}
                        picture={card.picture}
                        color={card.color}
                        classe={card.classe}
                        marginTop={card.marginTop} // Passer marginTop
                    />
                ))}
            </div>
        </main>
    );
}
