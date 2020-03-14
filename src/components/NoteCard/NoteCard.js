import React from 'react';

class NoteCard extends React.Component {
    
    constructor(props) {
        super(props);

        this.content = props.content;
        this.id = props.id;
    }

    handleRemove(id) {
        console.log(id);
        alert('remove: ', id);
    }

    render() {
        return (
            <div className="card-panel grey lighten-5">
                <li>{this.id} - {this.content}</li>
                <div className="card-actions">
                    <i className="fas fa-trash" onClick={() => {this.handleRemove(this.id)}}></i>
                </div>
            </div>
        )
    }
}

export default NoteCard;