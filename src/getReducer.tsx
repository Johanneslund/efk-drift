import { getFormattedDate } from "./util";

export const GET_FORMATTED_DATE = "GET_FORMATTED_DATE";
export const GET_ALL_STATUS = "GET_ALL_STATUS";


export const INITIAL_STATE = {
    qa: "UP",
    int: "UP",
    prod: "UP",
    idp: "UP",
    dateTime: getFormattedDate
}

export const getReducer = (state: any, action: any) => {
    switch (action.type) {
        case GET_FORMATTED_DATE:
            return { ...state, dateTime: getFormattedDate }
        case GET_ALL_STATUS:
            return {...state, qa:"DOWN"}
        default:
            return state
    }

}