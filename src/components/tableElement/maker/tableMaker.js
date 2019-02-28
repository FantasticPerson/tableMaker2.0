import React, { Component, PropTypes } from 'react';
import TdMaker from './tdMaker'
import { applyProps } from '../applyProps'

export default class tableMaker extends Object {
    constructor() {
        super()
        applyProps.call(this, 'table', ...Array.prototype.slice.call(arguments, 0))

        this.getNode = getNode
        this.createTd = createTd
        this.setColWidth = setColWidth
        this.setRowHeight = setRowHeight
        this.initTds = initTds
        this.tds = []

        this.initTds()
    }
}

function initTds() {
    const { row, col } = this.posInfo
    let tdArr = []
    for (let i = 0; i < row; i++) {
        tdArr[i] = []
        for (let j = 0; j < col; j++) {
            tdArr[i][j] = this.createTd(j, i, null);
        }
    }
    this.tds = tdArr
}

function createTd(x, y, recoverData, isPlaceHolder = false) {
    return new TdMaker({
        posInfo: { x, y, rowSpan: 1, colSpan: 1, tableWidth: 1, tableHeight: 1 },
        type: 0
    })
}

function setRowHeight(id, height) {

}

function setColWidth(id, width) {

}

function getItemByPoint(point){

}

function merge(tdArr){
    
}

function split(tdArr){

}

function checkCanMerge(){

}

function getNode(ids) {

}