import firebase from "../../config/fbConfig";

export const clock = (time) => {
    return (dispatch) => {
        // make async call to database
        const db =  firebase.firestore();       
        db.collection('timeCapture/sizwe.hugo@younglings.africa/timeZone').add({
            ...time
        }).then(() => {
            dispatch({ type: 'CLOCK_TIME', time: time });
        }).catch((err) => {
            dispatch({ type: 'CLOCK_TIME_ERROR', err });
        })
        
    }
};