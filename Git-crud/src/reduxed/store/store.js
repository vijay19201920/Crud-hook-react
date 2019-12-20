import {createStore} from 'redux';
import studentReducer from './reducers.js';

let initialState = [
    {id:1,name:'John Doe',grade:1,school:'React Redux School'},
    {id:2,name:'Jane Doe',grade:2,school:'React Redux School'},
    {id:3,name:'Terry Adams',grade:3,school:'React Redux School'},
    {id:4,name:'Jenny Smith',grade:4,school:'React Redux School'}
];




const Store = createStore(studentReducer,initialState);

export default Store