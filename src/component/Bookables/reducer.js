export default function reducer(state,action){
    switch(action.type){
        case "FETCH_BOOKABLES_REQUEST":
            return {
                ...state,
                isLoading:true,
                error:false,
                bookables:[]
            }
        case "FETCH_BOOKABLES_SUCCESS":
            return {
                ...state,
                isLoading:false,
                bookables:action.payload
            }
        case "FETCH_BOOKABLES_ERROR":
            return {
                ...state,
                isLoading:false,
                error:action.payload
            }
        case "SET_GROUP":
            return {
                ...state,
                group:action.payload,
                bookablesIndex:0
            }
        case "SET_BOOKABLE":
            return {
                ...state,
                bookablesIndex:action.payload
            }
        case "NEXT_BOOKABLE":
            const count = state.bookables.filter(b=>b.group === state.group).length
            return {
                ...state,
                bookablesIndex:(state.bookablesIndex+1)%count
            }
        default:
            return state;
    }
}