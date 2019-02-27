import { createReducer } from 'redux-act'
import * as actions from '../actions/tool';

const defaultState = {
    show: false,
    showSubEdit: false,
    showComponentEdit: false,
    showFormTool: false,
    showSetStyle: false
}

const toolInfo = createReducer({
    [actions.dUpdateEditTool]: (state, bool) => {
        return { ...state, show: bool }
    },
    [actions.dUpdateSubEdit]: (state, bool) => {
        return { ...state, showSubEdit: bool }
    },
    [actions.dUpdateComponentEdit]: (state, bool) => {
        return { ...state, showComponentEdit: bool }
    },
    [actions.dUpdateFormTool]: (state, bool) => {
        return { ...state, showFormTool: bool }
    },
    [actions.dUpdateSetStyle]: (state, bool) => {
        return { ...state, showSetStyle: bool }
    }
}, defaultState)

export default toolInfo