import _ from 'lodash';

export default (state = {} , action) => {
    switch(action.type){
        case 'ADD_USER':{
            return {...state, [action.payload._id]: action.payload };
        }
        case 'UPDATE_USER':{
            return {...state, [action.payload._id]: action.payload };
        }
        case 'DELETE_USER':{
            return _.omit(state, action.payload);
        }
        case 'GET_USER':{
            return {...state, [action.payload._id]: action.payload };
        }
        case 'GET_ALL_USERS':{
            return {...state, ..._.mapKeys(action.payload, '_id')};
        }
        default:{
            return state;
        }
    }
}