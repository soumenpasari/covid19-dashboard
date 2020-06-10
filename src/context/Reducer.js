const Reducer = (state,action) => {
    switch(action.type) {
        case 'UPDATE_STATE_DATA':
            return {
                ...state,
                stateData : action.payload
            }
        default:
            return state;
    }
};

export default Reducer;