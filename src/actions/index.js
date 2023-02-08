import * as actionTypes from '../actionTypes'
export const addPost = (post) => {
    return {
        type: actionTypes.POST_ADDED,//השדה הזה הוא חובה וחובה לקרוא לו בשם טייפ בכל אקשן שניצור
        payload: post// reducersהשדה הזה אינו חובה מכיוון שלא תמיד צריך לשלוח פרמטרים אבל אם משתמשים בו צריך לשים לב ב 
        //השדה הזה יהיה בשם זהה
    }
}
export const postEdit = (post) => {
    return {
        type: actionTypes.POST_EDITED,
        payload: post
    }
}
export const selectPost = (post) => {
    return {
        type: actionTypes.POST_SELECTED,
        payload: post
    }
}
export const deletePost = (postId) => {
    return {
        type: actionTypes.POST_DELETED,
        id: postId
    }
}
export const showMessage = value => {
    return {
        type: actionTypes.SHOW_MESSAGE,
        payload: value
    }
}
export const selectedForDeleting = post => {
    return {
        type: actionTypes.POST_SELECTED_FOR_DELTEING,
        payload: post
    }
}
export const cancleDelete = () => {
    return {
        type: actionTypes.DELETE_CANCELED
    }
}

export const saveEdit = (post) => {
    return {
        type: actionTypes.SAVE_EDIT,
        payload: post
    }
}
export const cancleEdit = () => {
    return {
        type: actionTypes.EDIT_CANCELED
    }
}