import { createAction } from 'redux-act'

export const dUpdateEditTool = createAction('update_edit_tool')
export const dUpdateSubEdit = createAction('update_sub_edit')
export const dUpdateComponentEdit = createAction('update_component_edit')
export const dUpdateFormTool = createAction('update_form_tool')
export const dUpdateSetStyle = createAction('update_set_style')

export function updateEditTool(bool){
    return (dispatch)=>{
        dispatch(dUpdateEditTool(bool))
    }
}

export function updateSubEdit(bool){
    return (dispatch)=>{
        dispatch(dUpdateSubEdit(bool))
    }
}

export function updateComponentEdit(bool){
    return (dispatch)=>{
        dispatch(dUpdateComponentEdit(bool))
    }
}

export function updateFormTool(bool){
    return (dispatch)=>{    
        dispatch(dUpdateFormTool(bool))
    }
}

export function updateSetStyle(bool){
    return (dispatch)=>{
        dispatch(dUpdateSetStyle(bool))
    }
}