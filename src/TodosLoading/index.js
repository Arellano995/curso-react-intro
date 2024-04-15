import React from 'react';
import './TodosLoading.css';

function TodosLoading(){

    return (
    <div className="loader">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
    );
}

export {TodosLoading};