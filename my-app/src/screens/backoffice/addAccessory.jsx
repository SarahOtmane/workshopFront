import { useState } from 'react';

import '../../css/backoffice/screen.css';
import InputProduct from '../../components/backoffice/inputProduct';
import Button from '../../components/button';

export default function AddAccessory(){

    const [accessory, setAccessory] = useState({
        name: "",
        color: "#000000",
        price: 0,
        image: "",
        imageUrl: ""
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setErrorMessage('');
        if (files && files.length > 0) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);
            setAccessory(prevState => ({
                ...prevState,
                image: file.name,
                imageUrl: imageUrl
            }));
        } else {
            setAccessory(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const sendAccessory = async () => {
        if (accessory.name.trim() === '' || accessory.price <= 0 || accessory.image === '') {
            setErrorMessage('Le nom, le prix et l\'image sont requis.');
        } else {
            console.log(accessory);
        }

    };

    return(
        <main className="w-100 h-100">
            <div className='centered text_uppercase pt-2'>
                <h1>Ajouter un accessoire</h1>
            </div>
            <div className='row'>
                <div className='w-30 card'>
                        <InputProduct 
                            label='Nom' 
                            placeholder='nom de votre produit' 
                            onChange={handleChange}
                            name='name'
                            value={accessory.name}
                        />
                        <InputProduct 
                            label='Prix'
                            placeholder='prix de votre produit' 
                            type='number' 
                            onChange={handleChange}
                            name='price'
                            value={accessory.price}
                        />
                        <InputProduct 
                            label='Image (webp)'
                            type='file'
                            onChange={handleChange}
                            name='image'
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <div className='row'>
                        <Button
                            text='Upload'
                            onClick={sendAccessory}
                            icon = {false}
                            className="buttonRounded"
                        />
                        </div>
                </div>
                <div>
                <h2 className='pt-2'>Prévisualisation</h2>
                {accessory.imageUrl && (
                    <div className="image-preview">
                        <img src={accessory.imageUrl} alt="Preview" />
                    </div>
                )}
                </div>
            </div>
        </main>
    )
}