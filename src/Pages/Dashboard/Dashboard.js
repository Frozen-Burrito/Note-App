import React from 'react';

import { connect } from 'react-redux';

// Components 
import Sidebar from '../../components/Sidebar';

import NoteDetails from '../../components/NoteDetails';
import AddForm from '../../components/AddNote';

const Dashboard = ({notes}) => {

    console.log(notes);

    const temp = () => {
        console.log('Temp');
    }

    return (
        <div className="App">

            <div className="row">
                <Sidebar />
                <NoteDetails />
            </div>
        </div>  
    );
} 

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps)(Dashboard);