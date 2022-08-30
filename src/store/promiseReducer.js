
export function promiseReducer(state={}, {type, name, status, payload, error}) {
    if (type === 'PROMISE'){
        return {
            ...state,
            [name]:{status, payload, error}
        }
    }
    return state
}

const actionPending   =       name      => ({type:'PROMISE',name, status: 'PENDING'})
const actionFulfilled =  (name,payload) => ({type:'PROMISE',name, status: 'FULFILLED', payload})
const actionRejected  =   (name,error)  => ({type:'PROMISE',name, status: 'REJECTED', error})

export const actionPromise   = (name, promise) =>
    async dispatch => {
        dispatch(actionPending(name))
        try {
            let payload = await promise
            dispatch(actionFulfilled(name, payload))
            return payload
        }
        catch(error){
            dispatch(actionRejected(name, error))
        }
    }

    const getGQL = (add)  => fetch('https://api.unsplash.com/photos' + add, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Client-ID 896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'
        }
    }).then(res => res.json())
        .then(data => {
            return data;
        })


export const actionGetPhotoes= () => 
    actionPromise('photos', getGQL('?page=1'));

export const actionGetOnePhoto = (id) => 
    actionPromise('onephoto', getGQL('/'+id));

