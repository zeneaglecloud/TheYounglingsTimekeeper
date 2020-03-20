export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Joshua',
            authorLastName: 'Smith',
            authorId: 420420,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
        
    }
};

export const addSickLeave = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('Leave/sickLeave/test').add({
            ...project,
            authorFirstName: 'Sizwe',
            authorLastName: 'Hugo',
            authorId: 420,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_SICKLEAVE', project: project });
        }).catch((err) => {
            dispatch({ type: 'ADD_SICKLEAVE_ERROR', err });
        })
        
    }
};