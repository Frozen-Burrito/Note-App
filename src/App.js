import React from 'react';

import firebase from 'firebase';
import 'firebase/database';
import { f_config } from './config/firebase_config';

import Pages from './Pages';

class App extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         notes: [
    //             // {id: 0, content: 'This is a default note'},
    //             // {id: 1, content: 'This is another default note'},
    //         ]
    //     };

    //     this.app = firebase.initializeApp(f_config);
    //     this.db = this.app.database().ref().child('notes');

    //     this.addNote = this.addNote.bind(this);
    //     this.removeNote = this.removeNote.bind(this);
    // }

    // componentDidMount() {
    //     const { notes} = this.state;

    //     this.db.on('child_added', snapshot => {
    //         notes.push({
    //             id: snapshot.key,
    //             content: snapshot.val().content
    //         })

    //         this.setState({notes});
    //     });

    //     this.db.on('child_removed', snapshot => {
    //         for(let i = 0; i < notes.length; i++) {
    //             if (notes[i].id == snapshot.key) {
    //                 notes.splice(i, 1);
    //             }
    //         }

    //         this.setState({notes});
    //     })
    // }

    // addNote(noteContent) {
    //     // let {notes} = this.state;

    //     // notes.push({
    //     //     id: notes.length + 1,
    //     //     content: noteContent,
    //     // })

    //     // this.setState({
    //     //     notes,
    //     // });

    //     this.db.push().set({content: noteContent});
    // }

    // removeNote(noteId) {
    //     this.db.child(noteId).remove();
    // }

    render() {
        return (
            <Pages />
        );
    }
}

export default App;