const initState = {
    projects: [
        {id: '1', title: 'help find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah2'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah3'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': 
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'ADD_SICKLEAVE':
            console.log('added sick leave', action.project);
            return state;
        case 'ADD_SICKLEAVE_ERROR':
            console.log('added sick leave error', action.err);
            return state;
        default: 
            return state;
    }
}

export default projectReducer;