const initState = {
    projects: [
        {id: 'monday', monday: 'Monday'}
    ]
}

const clockInReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CLOCK_TIME': 
            console.log('clock time', action.project);
            return state;
        case 'CLOCK_TIME_ERROR':
            console.log('clock time error', action.err);
            return state;
        default: 
            return state;
    }
}

export default clockInReducer;