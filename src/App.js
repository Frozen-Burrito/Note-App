import React from 'react';

import firebase from 'firebase';
import 'firebase/database';
import { f_config } from './config/firebase_config';

import NoteCard from './components/NoteCard';
import NoteDetails from './components/NoteDetails';
import AddForm from './components/AddNote';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            notes: [
                // {id: 0, content: 'This is a default note'},
                // {id: 1, content: 'This is another default note'},
            ]
        };

        this.app = firebase.initializeApp(f_config);
        this.db = this.app.database().ref().child('notes');

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    componentDidMount() {
        const { notes} = this.state;

        this.db.on('child_added', snapshot => {
            notes.push({
                id: snapshot.key,
                content: snapshot.val().content
            })

            this.setState({notes});
        });

        this.db.on('child_removed', snapshot => {
            for(let i = 0; i < notes.length; i++) {
                if (notes[i].id == snapshot.key) {
                    notes.splice(i, 1);
                }
            }

            this.setState({notes});
        })
    }

    addNote(noteContent) {
        // let {notes} = this.state;

        // notes.push({
        //     id: notes.length + 1,
        //     content: noteContent,
        // })

        // this.setState({
        //     notes,
        // });

        this.db.push().set({content: noteContent});
    }

    removeNote(noteId) {
        this.db.child(noteId).remove();
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
                                        removeNote={this.removeNote}
                                    />
                                )
                            })}
                        </ul>

                        <button className="action-btn modal-trigger" ><i className="fas fa-plus"></i></button>
                    </div>

                    <div className="col s9 grey lighten-5">
                        <NoteDetails />
                        <AddForm addNote={this.addNote}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;