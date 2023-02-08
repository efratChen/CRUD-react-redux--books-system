
import * as actionTypes from '../actionTypes';
// import { Item } from 'semantic-ui-react';
const initialState = {
    postList: [
        { postId: 111, writerId: 11, titel: "a", concent: "aaaa", lastUpdateDate: new Date(2020, 10, 11) },
        { postId: 222, writerId: 22, titel: "b", concent: "bbbb", lastUpdateDate: new Date(2020, 10, 12) },
    ],
    selectedPost: null,
    ensureDeletingMessage: null,
    postEdit: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_ADDED:
            let arr = [...state.postList, action.payload];
            return {
                ...state,
                postList: arr,
                postEdit: null
            }
        case actionTypes.POST_SELECTED:
            return {
                ...state,
                selectedPost: action.payload
            };
        case actionTypes.POST_DELETED:
            let arr2 = state.postList.filter(p => p.postId !== action.id);
            // let selectedPost = state.selectedPost && state.selectedPost.postId === action.id ? null : state.selectedPost;
            return {
                ...state,
                postList: arr2,
                selectedPost: null,
                ensureDeletingMessage: null,
                postEdit: null
            };
        case actionTypes.POST_SELECTED_FOR_DELTEING:
            return {
                ...state,
                ensureDeletingMessage: action.payload
            };
        case actionTypes.DELETE_CANCELED:
            return {
                ...state,
                ensureDeletingMessage: null
            };
        case actionTypes.POST_EDITED: {
            return {
                ...state,
                postEdit: action.payload
            }
        }
        case actionTypes.SAVE_EDIT:
            let arr4 = state.postList.map((i) => i.postId === action.payload.postId ? action.payload : i);
            return {
                ...state,
                postList: arr4,
                postEdit: null,
                selectedPost:action.payload
            }
        case actionTypes.EDIT_CANCELED:
            return {
                ...state,
                postEdit: null
            }
    }
    return state;
}
export default postReducer;