import { stat } from "fs";
import { User } from "../../classes/User";

const setUserReducer = (
  state: { user: User } = { user: new User() },
  action: { type: string; user: User }
) => {
    switch (action.type){
        case "SET_USER":
            return {
                ...state, 
                user: action.user
            }
          default:
              return state  
    }
};

export default setUserReducer