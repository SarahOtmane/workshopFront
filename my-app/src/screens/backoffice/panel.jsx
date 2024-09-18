import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../css/backoffice/screen.css';
import AddCard from '../../components/backoffice/addCard';

export default function Panel(){

    const navigate = useNavigate();

    const handleCardClick = (type) => {
        if (type === 'accessory') {
            navigate('/admin/add-accessory');
        } else if (type === 'console') {
            navigate('/admin/add-console');
        }
    };


    return(
        <main className="w-100 h-100">
            <div className="head row centered">
                <h1 className='text_uppercase'>panel</h1>
            </div>
            <AddCard type="accessory" title="ajouter un accesoire" onClick={() => handleCardClick('accessory')}/>
            <AddCard type="console" title="ajouter une console" onClick={() => handleCardClick('console')}/>
        </main>
    )
}