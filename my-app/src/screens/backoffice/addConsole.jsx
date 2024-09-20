import { useState } from 'react';
import '../../css/backoffice/screen.css';
import InputProduct from '../../components/backoffice/inputProduct';
import Button from '../../components/button';
import axios from '../../services/axiosConfig';

export default function AddConsole() {
    const [step, setStep] = useState(1);
    const [currentOption, setCurrentOption] = useState({ name: '', images: [], color: '' });
    const [currentAccessory, setCurrentAccessory] = useState({ name: '', price: 0, facultatif: false, options: [] });
    const [consoleData, setConsoleData] = useState({ name: "", price: 0 });
    const [errorMessage, setErrorMessage] = useState('');
    const [optionErrorMessage, setOptionErrorMessage] = useState('');

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
                    const r = data[i], g = data[i + 1], b = data[i + 2];
                    const color = `rgb(${r},${g},${b})`;

                    if (color === 'rgb(248,248,248)' || color === 'rgb(43,40,49)' || color === 'rgb(0,0,0)') continue;

                    colorCount[color] = (colorCount[color] || 0) + 1;

                    if (colorCount[color] > maxCount) {
                        maxCount = colorCount[color];
                        dominantColor = color;
                    }
                }
                resolve(dominantColor);
            };

            img.onerror = (err) => reject(err);
        });
    };

    const handleChange = async (e) => {
        const { name, value, files, type, checked } = e.target;
        setErrorMessage('');
        setOptionErrorMessage('');

        if (type === 'checkbox') {
            setCurrentAccessory(prevState => ({ ...prevState, facultatif: checked }));
        } else if (files && files.length > 0) {
            await handleFileUpload(name, files);
        } else {
            handleInputChange(name, value);
        }
    };

    const handleInputChange = (name, value) => {
        if (name === 'accessoryName') {
            setCurrentAccessory(prevState => ({ ...prevState, name: value }));
        } else if (name === 'optionName') {
            setCurrentOption(prevState => ({ ...prevState, name: value }));
        } else if (name === 'consoleName') {
            setConsoleData(prevState => ({ ...prevState, name: value }));
        } else if (name === 'consolePrice') {
            setConsoleData(prevState => ({ ...prevState, price: parseFloat(value) || 0 }));
        } else if (name === 'optionColor') {
            setCurrentOption(prevState => ({ ...prevState, color: value }));
        } else if (name === 'accessoryPrice') {
            setCurrentAccessory(prevState => ({ ...prevState, price: parseFloat(value) || 0 }));
        }
    };

    const handleFileUpload = async (name, files) => {
        const filePromises = Array.from(files).map(file => {
            const imageUrl = URL.createObjectURL(file);
            return getDominantColor(imageUrl).then(dominantColor => ({
                name: file.name,
                url: imageUrl,
                color: dominantColor
            }));
        });

        const images = await Promise.all(filePromises);

        if (name === 'accessoryImages') {
            setCurrentAccessory(prevState => ({
                ...prevState,
                options: prevState.options.map(option => ({
                    ...option,
                    images: option.images.concat(images)
                }))
            }));
        } else if (name === 'optionImages') {
            setCurrentOption(prevState => ({
                ...prevState,
                images: [...prevState.images, ...images]
            }));
        }
    };

    const addConsole = async () => {
        try {
            console.log(consoleData);
            //await axios.post('/consoles', { name: consoleData.name, price: consoleData.price });
            setStep(2); 
        } catch (error) {
            setErrorMessage('Erreur lors de l\'ajout de la console.');
            console.error('Error creating console:', error);
        }
    };

    const addOption = () => {
        if (currentOption.name.trim() === '') {
            setOptionErrorMessage('Le nom de l\'option est requis.');
            return;
        }
        setCurrentAccessory(prevState => ({
            ...prevState,
            options: [...prevState.options, currentOption.name]
        }));
        console.log(currentAccessory);
        
        setCurrentOption({ name: '', images: [], color: '' });
    };

    const addAccessory = async () => {
        if (currentAccessory.name.trim() === '' || currentAccessory.options.length === 0) {
            setErrorMessage('Le nom de l\'accessoireet au moins une option sont requis.');
            return;
        } else (currentAccessory.price < 0)
            setErrorMessage('Le prix de l\'accessoire doit être supérieur ou égal à 0.');

        try {
            console.log(currentAccessory);
            // const response = await axios.post('/accessories', {
            //     name: currentAccessory.name,
            //     price: currentAccessory.price,
            //     facultatif: currentAccessory.facultatif,
            //     options: currentAccessory.options
            // });

            // Réinitialiser l'état de l'accessoire ou procéder comme nécessaire
            setCurrentAccessory({ name: '', price: 0, facultatif: false, options: [] });
        } catch (error) {
            setErrorMessage('Erreur lors de l\'ajout de l\'accessoire.');
            console.error('Error creating accessory:', error);
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
                            label='Nom de la console'
                            placeholder='Nom de votre produit'
                            onChange={handleChange}
                            name='consoleName'
                            value={consoleData.name}
                        />
                        <InputProduct
                            label='Prix de la console'
                            placeholder='Prix de votre produit'
                            type='number'
                            onChange={handleChange}
                            name='consolePrice'
                            value={consoleData.price}
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <Button
                            text='Ajouter la console'
                            onClick={addConsole}
                            className={`buttonRounded`}
                        />
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className='row centered'>
                    <div className='w-50 card'>
                        <InputProduct
                            label="Nom de l'accessoire"
                            type='text'
                            placeholder="Nom de l'accessoire"
                            onChange={handleChange}
                            name='accessoryName'
                            value={currentAccessory.name}
                        />
                        <InputProduct
                            label="Prix de l'accessoire"
                            type='number'
                            placeholder="Prix de l'accessoire"
                            onChange={handleChange}
                            name='accessoryPrice'
                            value={currentAccessory.price}
                        />
                        <InputProduct
                            label="Accessoire facultatif"
                            type="checkbox"
                            name="facultatif"
                            checked={currentAccessory.facultatif}
                            onChange={handleChange}
                        />
                        <Button
                            text="Ajouter l'accessoire"
                            onClick={addAccessory}
                            className="buttonRounded"
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <div className='mt-2'>
                            <InputProduct
                                label="Ajouter une option"
                                type='text'
                                placeholder="Nom de l'option"
                                onChange={handleChange}
                                name='optionName'
                                value={currentOption.name}
                            />
                            <Button
                                text="Ajouter l'option"
                                onClick={addOption}
                                className="buttonRounded"
                            />
                        </div>
                        {optionErrorMessage && <p className="error-message">{optionErrorMessage}</p>}
                    </div>
                </div>
            )}
        </main>
    );
};
