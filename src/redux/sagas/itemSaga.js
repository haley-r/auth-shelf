import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEM" actions
function* fetchItem() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the item
        // If a item is logged in, this will return their information
        // from the server session (req.item)
        const response = yield axios.get('/api/shelf', config);

        // now that the session has given us a item object
        // with an id and itemname set the client-side item object to let
        // the client-side code know the item is logged in
        yield put({ type: 'SET_ITEM', payload: response.data });
    } catch (error) {
        console.log('Item get request failed', error);
    }
}

function* itemSaga() {
    yield takeLatest('FETCH_ITEM', fetchItem);
}

export default itemSaga;
