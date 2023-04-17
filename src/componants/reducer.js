
 export const reducer = (state, action) =>{
    if(action.type === "REMOVE"){
        return{
            ...state,
            item: state.item.filter((curElem)=>{
                return curElem.id !== action.payload
            })  
        };
    }

    if(action.type === "CLEAR"){
        return{
            ...state,
            item:[]
        };
    }

    if(action.type === "INCREMENT"){
       let updatedCart = state.item.map((curElem)=>{
            if(curElem.id === action.payload){
                return {...curElem, quantity: curElem.quantity + 1}
            }
            return curElem;
       });
       return {...state, item:updatedCart}
       
    }

    if(action.type === "DECREMENT"){
        let updatedCart = state.item.map((curElem)=>{
           if(curElem.id === action.payload){
                return {...curElem, quantity: curElem.quantity -1}
           }
           return curElem;
        }).filter((curElem)=>{
            return curElem.quantity !== 0;
        })
        return {...state, item:updatedCart};
    }

    if(action.type === "GET_TOTAL"){
        let {totalItem} = state.item.reduce((accum, curVal)=>{
            let {quantity} = curVal;
            accum.totalItem += quantity;
            return accum;
        },{
            totalItem:0,
        });
        return {...state, totalItem};
    }
    return state;
}