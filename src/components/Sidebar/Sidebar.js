import React from 'react';

import { connect } from 'react-redux';

// Components
import NoteCard from '../../components/NoteCard';

const Sidebar = ({notes}) => {

    const noteList = notes.length ? (
        notes.map(note => {
            return (
                <NoteCard note={note} key={note.id}/>
            )
        })
    ) : (
        <p>No notes yet!</p>
    )

    return (
        <div className="col s3 grey lighten-3">
            <ul>
                {noteList}
            </ul>

            <button className="action-btn modal-trigger" ><i className="fas fa-plus"></i></button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps)(Sidebar);