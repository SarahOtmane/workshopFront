import '../../css/frontoffice/home.css';
import TypeConsoleCard from '../../components/typeConsoleCard'; // Assure-toi que le chemin est correct
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';

export default function Home() {
    const card=[{
        title: "ADVANCE SP",
        picture: image2,
        color: "purple",
        classe: false
    },{
        title: "GAMEBOY ADVANCE",
        picture: image3,
        color: "green",
        classe: true
    },{
        title: "GAMEBOY DMG",
        picture: image1,
        color: "red",
        classe: false
    },,{
        title: "GAMEBOY COLOR",
        picture: image4,
        color: "blue",
        classe: false
    }]
    return (
        <main className="home">
            <div className="cards-container">
                {card.map((card, index) => (
                    <TypeConsoleCard
                        key={index}
                        title={card.title}
                        picture={card.picture}
                        color={card.color}
                        classe={card.classe}
                    />
                ))}
            </div>
        </main>
    );
}
