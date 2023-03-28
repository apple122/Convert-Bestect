import {combineReducers} from 'redux'
import counterReducter from './counterReducter'

const rootReducer = combineReducers({
    blogdetail: counterReducter
})

export default rootReducer