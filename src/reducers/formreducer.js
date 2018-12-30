
const initialState = {from:'GBP',
                       to:'USD',
                       amount:0,
                       rate:[],
                       country:[],
                       base:'',
                       date:''
                       };

const formreducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case "CONVERT_FROM": 
            newState.from = action.value;
            break;
            
            case "CONVERT_TO": 
            newState.to = action.value;
            break;
         
        case "AMOUNT": 
            newState.amount = action.value;
            break;

            case "API_RATE": 
            newState.rate = action.value;
        
            break;    

            case "API_DATE": 
            newState.date = action.value;
            break; 
            
            default:
            
            
    }   
      
    return newState;
};

export default formreducer;
