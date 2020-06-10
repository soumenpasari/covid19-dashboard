export default (state,action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.transaction.filter(trans => trans.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            console.log('herer');
            return {
                ...state,
                transaction: [action.payload,...state.transaction]
            }
        default :
            console.log('here in reducer');
            return state;
    }
}