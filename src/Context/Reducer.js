import React from 'react'

export const  WeatherReducer=(state, action) =>{
  switch(action.type){
    case 'SET_CITY':
        // return as a object
        return{
            ...state, city:action.payload
        };
        case 'SET_CURRENT':
            return{
                 ...state, current:action.payload
            };
       case 'SET_DAILY':
        return{
              ...state, daily:action.payload
        } ; 
        case 'SET_HOUR':
            return{
                ...state, hour:action.payload
            };
         default:
            return{
                ...state
            }   

  }
   
}

