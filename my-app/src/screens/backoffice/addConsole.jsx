import { useState } from 'react';

import '../../css/backoffice/screen.css';
import InputProduct from '../../components/backoffice/inputProduct';
import Button from '../../components/button';
import axiosInstance from '../../services/axiosConfig';

export default function AddConsole() {

    const [step, setStep] = useState(1);
    const [currentOption, setCurrentOption] = useState({ name: '', images: [], optional: false, price: 0 });
    const [errorMessage, setErrorMessage] = useState('');
    const [optionErrorMessage, setOptionErrorMessage] = useState('');

    const [consoleData, setConsoleData] = useState({
        name: "",
        color: "#000000",
        price: 0,
        options: [],
    });

    const getDominantColor = (imageUrl) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = imageUrl;
    
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
    
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
    
                const colorCount = {};
                let dominantColor = '';
                let maxCount = 0;
    
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    const color = `rgb(${r},${g},${b})`;
    
                    if (color === 'rgb(248,248,248)' || color === 'rgb(43,40,49)' || color === 'rgb(0,0,0)') {
                        continue;
                    }
    
                    if (colorCount[color]) {
                        colorCount[color]++;
                    } else {
                        colorCount[color] = 1;
                    }
    
                    if (colorCount[color] > maxCount) {
                        maxCount = colorCount[color];
                        dominantColor = color;
                    }
                }
    
                resolve(dominantColor);
            };
    
            img.onerror = (err) => {
                reject(err);
            };
        });
    };

    const handleChange = async (e) => {
        const { name, value, files, type, checked } = e.target;
        setErrorMessage(''); // Réinitialiser le message d'erreur lors de la modification des champs
        setOptionErrorMessage(''); // Réinitialiser le message d'erreur des options lors de la modification des champs
        if (type === 'checkbox') {
            setCurrentOption(prevState => ({
                ...prevState,
                optional: checked
            }));
        } else if (files && files.length > 0) {
            const filePromises = Array.from(files).map(file => {
                const imageUrl = URL.createObjectURL(file);
                return getDominantColor(imageUrl).then(dominantColor => ({
                    name: file.name,
                    url: imageUrl,
                    color: dominantColor
                }));
            });

            const images = await Promise.all(filePromises);

            if (name === 'optionImages') {
                setCurrentOption(prevState => ({
                    ...prevState,
                    images: [...prevState.images, ...images]
                }));
            }
        } else {
            if (name === 'optionName') {
                setCurrentOption(prevState => ({
                    ...prevState,
                    name: value
                }));
            } else if (name === 'optionPrice') {
                setCurrentOption(prevState => ({
                    ...prevState,
                    price: parseFloat(value) || 0
                }));
            } else {
                setConsoleData(prevState => ({
                    ...prevState,
                    [name]: value
                }));
            }
        }
    };

    const addOption = () => {
        if (currentOption.name.trim() === '' || currentOption.images.length === 0) {
            setOptionErrorMessage('Le nom de l\'option et au moins une image sont requis.');
            return;
        }
        const newOption = { ...currentOption };
        if (newOption.optional) {
            newOption.images.unshift({ name: 'none', url: 'none', color: 'none' });
        }
        setConsoleData(prevState => ({
            ...prevState,
            options: [...prevState.options, newOption]
        }));
        setCurrentOption({ name: '', images: [], optional: false, price: 0 });
    };

    const logConsoleData = () => {
        console.log(consoleData);
    };

    const isNextButtonDisabled = () => {
        return consoleData.name.trim() === '' || consoleData.price <= 0;
    };

    // envoyer les données de la console à l'API
    const saveConsoleToDB = async () => {
        try {
            const response = await axiosInstance.post('/consoles', {
                name: consoleData.name,
                price: consoleData.price,
            });

            // Gérer la réponse si nécessaire
            console.log('Console ajoutée avec succès:', response.data);

            // Passer à l'étape suivante pour ajouter les accessoires
            setStep(2);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la console:', error);
            setErrorMessage('Erreur lors de l\'ajout de la console. Veuillez réessayer.');
        }
    };

    const handleNextClick = () => {
        if (isNextButtonDisabled()) {
            setErrorMessage('Des champs sont manquants ou incorrects.');
        } else {
            saveConsoleToDB();
        }
    };

    return (
        <main className="w-100 h-100">
            <div className='centered text_uppercase pt-2'>
                <h1>Ajouter une console</h1>
            </div>
            {step === 1 && (
                <div className='centered'>
                    <div className='w-50 card'>
                        <InputProduct 
                            label='Nom' 
                            placeholder='nom de votre produit' 
                            onChange={handleChange}
                            name='name'
                            value={consoleData.name}
                        />
                        <InputProduct 
                            label='Prix'
                            placeholder='prix de votre produit' 
                            type='number' 
                            onChange={handleChange}
                            name='price'
                            value={consoleData.price}
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <Button
                            text='Suivant'
                            onClick={handleNextClick}
                            icon={false}
                            className={`buttonRounded`}
                        />
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className='row'>
                    <div className='w-30 card'>
                        <InputProduct 
                            label="Nom de l'option"
                            type='text'
                            placeholder="nom de l'option"
                            onChange={handleChange}
                            name='optionName'
                            value={currentOption.name}
                        />
                        <InputProduct 
                            label="Prix de l'option"
                            type='number'
                            placeholder="prix de l'option"
                            onChange={handleChange}
                            name='optionPrice'
                            value={currentOption.price}
                        />
                        <InputProduct 
                            label='Images (webp)'
                            type='file'
                            onChange={handleChange}
                            name='optionImages'
                            multiple
                        />
                        <InputProduct
                            label="Option facultative"
                            type="checkbox" 
                            name="optional" 
                            checked={currentOption.optional} 
                            onChange={handleChange} 
                        />
                        {optionErrorMessage && <p className="error-message">{optionErrorMessage}</p>}
                        <div className='row'>
                            <Button
                                text="Ajouter l'option"
                                onClick={addOption}
                                icon={false}
                                className="buttonRounded"
                            />
                        </div>
                    </div>
                    <div className='w-50'>
                        <h2 className='pt-2'>Prévisualisation</h2>
                        {consoleData.imageUrl && (
                            <div className="image-preview">
                                <img src={consoleData.imageUrl} alt="Preview" />
                            </div>
                        )}
                        {consoleData.options.length > 0 && (
                            <div className="image-preview">
                                {consoleData.options.map((option, index) => (
                                    <div key={index}>
                                        {option.images[0].url !== 'none' && (
                                            <img key={`${index}-0`} src={option.images[0].url} alt={`Option ${index} Image 0`} className="base-image" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {consoleData.options.length > 0 && (
                            <div className="button-right">
                                <Button
                                    text="Ajouter la console"
                                    onClick={logConsoleData}
                                    icon={false}
                                    className="buttonRounded"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}