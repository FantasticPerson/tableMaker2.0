import React, { Component } from 'react';
import EventBus from 'eventbusjs'
import {EVENT_INSERT_TABLE} from '../../const'
import tableMaker from '../../components/tableElement/maker/tableMaker'
import TdComponent from '../../components/tableElement/tdComponent'

export default class TableMaker extends Component{
    componentDidMount(){
        window.eve = EventBus
        EventBus.addEventListener(EVENT_INSERT_TABLE,(event)=>{
            const {row,col} = event.target
            this.generateTable(row,col)
        })
    }
    render(){
        return <div className="table-container">
            TableMaker
            <TdComponent></TdComponent>
        </div>
    }
    generateTable(row,col){
        let posInfo = {row,col,width:820,height:962}
        let tableObj = new tableMaker({
            posInfo:posInfo
        })
    }
}