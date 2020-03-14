import React from 'react';

import NoteCard from './components/NoteCard';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            notes: [
                {id: 0, content: 'This is a default note'},
                {id: 1, content: 'This is another default note'},
            ]
        }
    }

    removeNote() {

    }

    addNote() {
        console.log('Add');
    }

    render() {
        return (
            <div className="App">
                
                <div className="app-header orange lighten-1 z-depth-2">
                    <div className="container">
                        <h2 className="grey-text text-lighten-4">Your Notes</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col s3 grey lighten-3">
                        <ul>
                            {this.state.notes.map(note => {
                                return (
                                    <NoteCard 
                                        content={note.content}
                                        id={note.id}
                                        key={note.id}
                                    />
                                )
                            })}
                        </ul>

                        <button className="action-btn modal-trigger" ><i className="fas fa-plus"></i></button>
                    </div>

                    <div className="col s9 grey lighten-5">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;