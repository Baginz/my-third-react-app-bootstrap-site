import React, { useEffect, useContext } from 'react'
import Form from '../components/ToDo/Form';
import Nootes from '../components/ToDo/Nootes';
import Alert from '../components/ToDo/Alert'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import Loader from '../components/UI/Loader';
import { Fragment } from 'react';


const ToDo = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])
    return (
        
                <Fragment>
                    <Alert />
                    <Form />
                    <hr />
                    {loading
                        ? <Loader />
                        : <Nootes notes={notes} onRemove={removeNote} />
                    }
                </Fragment>

    )
}

export default ToDo;
