export default function rootReducer(action, state) {
  
        switch(action.type) {
            case ACTION_1: return { value: action.value_1 };
            case ACTION_2: return { value: action.value_2 };
            
            default: return state;
        }
    
}
