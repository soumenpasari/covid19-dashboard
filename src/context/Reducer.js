const Reducer = (state,action) => {
    switch(action.type) {
        case 'UPDATE_STATE_DATA':
            return {
                ...state,
                stateData : action.payload
            }
        case 'UPDATE_TOTAL_INDIA_CASE':
            return {
                ...state,
                indiaTotalData : action.payload
            }
        case 'UPDATE_LOADING_STATE':
            return {
                ...state,
                isDataLoaded: action.payload
            }
        default:
            return state;
    }
};

export default Reducer;