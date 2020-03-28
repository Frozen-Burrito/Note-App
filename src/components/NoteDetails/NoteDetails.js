import React from 'react';

import { connect } from 'react-redux';

const NoteDetails = ({note}) => {

    const notePage = note ? (
        <div className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
    ) : (
        <h4 className="center">No note selected</h4>
    )

    return (
        <div className="col s9 grey lighten-5">     
            {notePage}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        note: state.selectedNote,
    }
}

export default connect(mapStateToProps)(NoteDetails);