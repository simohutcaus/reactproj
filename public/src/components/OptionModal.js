import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';


const OptionModal = (props) => (

    <Modal isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected option">
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>ok</button>
    </Modal>


    );


export default OptionModal;