import history from '../history';
import mongodb from '../apis/mongodb';

export const getUser = (id) => {
    return async (dispatch) => {
        const response = await mongodb.get('/userbase/'+id);
        dispatch({ type: 'GET_USER', payload: response.data});
    }
}

export const getAllUsers = () => {
    return async (dispatch) => {
        const response = await mongodb.get('/userbase');
        dispatch({ type: 'GET_ALL_USERS', payload: response.data});
    }
}

export const addUser = (formValues) => {
    return async (dispatch, getState) => {
        const response = await mongodb.post('/userbase/add', {...formValues});
        dispatch({ type: 'ADD_USER', payload: response.data});
        history.push('/');
    };
};

export const updateUser = (id, formValues) => {
    return async (dispatch) => {
        const response  = await mongodb.post('/userbase/update/'+id, {...formValues});
        dispatch({ type: 'UPDATE_USER', payload: response.data });
        history.push('/');
    };
};

export const deleteUser = (id) => {
    return async (dispatch) => {
        await mongodb.delete('/userbase/'+id);
        dispatch({ type: 'DELETE_USER', payload: id });
    };
};