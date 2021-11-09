import React, { useState, useContext } from 'react'
import { AlertContext } from '../../context/alert/alertContext';
import { FirebaseContext } from '../../context/firebase/firebaseContext';

const Form = () => {
    const [value, setValue] = useState();
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault();

        if(value.trim()){
            firebase.addNote(value.trim());
            alert.show('Заметка была создана', 'success');
            setValue('');
        } else {
            alert.show('Введите название заметки');
        }
    }
    
    return (
        <form onSubmit={submitHandler}> 
            <div className="form-group">
                <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}

export default Form;
