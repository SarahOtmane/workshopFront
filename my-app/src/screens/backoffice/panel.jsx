import { useState } from 'react';

import '../../css/backoffice/screen.css';
import AddAccessory from '../../components/backoffice/addAccessory';


export default function Panel(){


    return(
        <main className="w-100 h-100">
            <AddAccessory />
        </main>
    )
}