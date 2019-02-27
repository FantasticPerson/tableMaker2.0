import React,{Component,PropTypes} from 'react'
import {applyProps} from '../applyProps'

export default class TdMaker extends Object{
    constructor(){
        super()
        applyProps.call(this,'td',...Array.prototype.slice.call(arguments,0))

        this.getNode = getNode
    }
}

function getNode(tdIds,index=0){

} 