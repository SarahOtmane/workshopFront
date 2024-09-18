import { useState } from 'react';

import '../../css/backoffice/screen.css';
import AddCard from '../../components/backoffice/addCard';


export default function Panel(){


    return(
        <main className="w-100 h-100">
            <div className="head row centered">
                <h1 className='text_uppercase'>panel</h1>
            </div>
            <AddCard type="accessory" title="ajouter un accesoire" />
            <AddCard type="console" title="ajouter une console" />
        </main>
    )
}