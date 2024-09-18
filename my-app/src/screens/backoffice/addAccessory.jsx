import { useState } from 'react';

import '../../css/backoffice/screen.css';
import InputProduct from '../../components/backoffice/inputProduct';

export default function AddAccessory(){

    const [accessory, setAccessory] = useState({
        name: "",
        color: "#000000",
        price: 0,
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccessory(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(accessory);
    };

    return(
        <main className="w-100 h-100">
            <div className='centered'>
                <h1>Add Accessory</h1>
            </div>
            <div className='card'>
            <form>
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
                    label='Image'
                    type='file'
                    onChange={handleChange}
                    name='image'
                    value={accessory.image}
                />
                <InputProduct
                    label='Couleur'
                    type='color' 
                    onChange={handleChange} 
                    name='color'
                    value={accessory.color}
                />
            </form>
            </div>
        </main>
    )
}