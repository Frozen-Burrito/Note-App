const initialState = {
    notes: [
        {id: 1, title: 'Just A Note', content: 'Some random content just to fill the gap'},
        {id: 2, title: 'Just Another Note', content: 'Some random content just to fill the gap'},
        {id: 3, title: 'Just The Last Note', content: 'Some random content just to fill the gap'},
    ],
    selectedNote: {id: 3, title: 'Just The Last Note', content: 'Some random content just to fill the gap'},
}

const RootReducer = ( state = initialState, action ) => {

    let updatedNotes = state.notes;
    let selectedNote= state.selectedNote;

    switch (action.type) {
        case 'ADD_NOTE':
            updatedNotes.push(action.note);
            console.log('Add');
            return {
                ...state,
                notes: updatedNotes,
            }

        case 'DELETE_NOTE':
            updatedNotes = updatedNotes.filter(note => {
                return note.id !== action.id;
            })
            console.log('Delete');
            return {
                ...state,
                notes: updatedNotes,
            }

        case 'SELECT_NOTE':
            let selected = updatedNotes.filter(note => {
                return note.id === action.id;
            })
            selectedNote = selected[0];
            return {
                ...state,
                selectedNote,
            }

        default:
            console.log('Default');
            return state;
    }
}

export default RootReducer;