import { configureStore } from '@reduxjs/toolkit';
import  ReducerCounter  from '../example1/CounterSlice';
import ReducerColour from '../example1/ColourSlice';
import ReducerText from '../example1/TextSlice';

export const Store=configureStore({
    reducer:{
    count:ReducerCounter,
    colour:ReducerColour,
    Text:ReducerText
    }
})