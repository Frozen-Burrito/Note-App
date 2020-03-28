export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        id,
    }
}

export const addNote = (note) => {
    return {
        type: 'ADD_NOTE',
        note,
    }
}

export const selectNote = (id) => {
    return {
        type: 'SELECT_NOTE',
        id
    }
}