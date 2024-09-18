import '../../css/frontoffice/home.css';
import TypeConsoleCard from '../../components/typeConsoleCard'; // Assure-toi que le chemin est correct
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

export default function Home() {
    const card=[{
        title: "GAMEBOY DMG",
        picture: image1,
        color: "red",
        classe: false
    },{
        title: "GAMEBOY ADVANCE",
        picture: image3,
        color: "green",
        classe: true
    },{
        title: "ADVANCE SP",
        picture: image2,
        color: "purple",
        classe: false
    }]
    return (
        <main className="home">
            <h1 className="text_uppercase m-auto">Construit ta propre console</h1>
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
