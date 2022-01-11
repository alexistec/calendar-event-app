import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui';


export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handlerAddNew = (e) => {

        dispatch( uiOpenModal() )
    }

    return (
        <button
            className="btn bt btn-primary fab"
            onClick={ handlerAddNew }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
