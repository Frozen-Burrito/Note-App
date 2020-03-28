import React from 'react';

import { connect } from 'react-redux';
import { deleteNote, selectNote } from '../../Actions/NoteActions';

const NoteCard = (props) => {
    
    const { note } = props;

    // constructor(props) {
    //     super(props);

    //     this.content = props.content;
    //     this.id = props.id;
    // }

    // handleRemove(id) {
    //     this.props.removeNote(id);
    // }

    const handleSelect = () => {
        props.selectNote(note.id);
    }

    const handleDelete = () => {
        // deleteNote(note.id);
    }

    return (
        <div className="card-panel grey lighten-5" onClick={handleSelect}>
            <div>
                <h5>{note.title}</h5>
                <p>{note.content}</p>
            </div>
            <div className="card-actions">
                    <i className="fas fa-trash" onClick={handleDelete}></i>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectNote: (id) => dispatch(selectNote(id))
    }
}

export default connect(null, mapDispatchToProps)(NoteCard);