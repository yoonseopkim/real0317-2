import { configureStore , createSlice} from '@reduxjs/toolkit'

let cart = createSlice(
    {
        name : 'cart',
        initialState :
            [
                {id : 0, name : 'White and Black', count : 2},
                {id : 2, name : 'Grey Yordan', count : 1}
            ]
    }
)

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state) {
            state.name = 'park'

        },
        increase(state) {
            state.age += 1
        }
    }


})
export let {changeName, increase} = user.actions

export default configureStore({
    reducer: {
        user : user.reducer,
cart : cart.reducer
    }
})

