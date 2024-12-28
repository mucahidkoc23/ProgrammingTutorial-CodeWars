function reducers(state, action){
  switch (action.type) {
    case 'ADD_CART':
      const {data}=action.payload;
      const add=[...state.productsList, data]
    return{...state, productsList: add};
    // case 'DELETE_CART':
    //   const mydata=action.payload.item;    
    //   const newData=state.productsList.filter(data=>{
    // if(data.id !== mydata.id) return true;});
    //   return {...state,productsList:newData};   
    default:
     return state;
    }
}
export default reducers;