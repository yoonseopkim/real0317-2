import { configureStore , createSlice} from '@reduxjs/toolkit'

let cart = createSlice(
    {
        name : 'cart',
        initialState :
            [
                {id : 0, name : 'White and Black', count : 2},
                {id : 2, name : 'Grey Yordan', count : 1}
            ],
        reducers : {
            addCount(state, action) {
                let 번호 = state.findIndex((a)=>{return a.id=== action.payload})
                state[번호].count++
            },
            addItem(state, action){
                state.push(action.payload)
            }
        }
    }
)

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state) {
            state.name = 'park'

        },
        increase(state, action) {
            state.age += action.payload
        }
    }


})
export let {changeName, increase} = user.actions
export let { addCount,addItem } = cart.actions;
export default configureStore({
    reducer: {
        user : user.reducer,
cart : cart.reducer
    }
})

