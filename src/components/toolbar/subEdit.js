import React, { Component } from 'react';
import ComponentEdit from './componentEdit'
import TableTool from './tabelTool'
import styles from './subEdit.module.css'

export default class SubEdit extends Component {
    constructor() {
        super()
        this.subTools = [
            { text: '部件', icon: require('../../styles/icon/edit/icon1.png'), iconSize: [14, 18], handler: this.onItemClick.bind(this) },
            { text: '布局', icon: require('../../styles/icon/edit/icon2.png'), iconSize: [14, 14], handler: this.onLayoutClick.bind(this) },
            { text: '预览', icon: require('../../styles/icon/edit/icon3.png'), iconSize: [17, 9], handler: this.onPreviewClick.bind(this) }
        ]
    }
    onLayoutClick() {
        const { updateSubEdit } = this.props.data.actions
        const { showSubEdit } = this.props.data
        updateSubEdit(!showSubEdit)
    }
    onItemClick() {
        const { updateComponentEdit } = this.props.data.actions
        const { showComponentEdit } = this.props.data
        updateComponentEdit(!showComponentEdit)
    }
    onPreviewClick() { }
    getClassName(text) {
        const { showSubEdit, showComponentEdit } = this.props.data
        if (text === '部件') {
            return styles['subtool-item'] + ' ' + (showComponentEdit ? styles['subtool-item-selected'] : '')
        } else if(text === '布局'){
            return styles['subtool-item'] + ' ' + (showSubEdit ? styles['subtool-item-selected'] : '')
        }
        return styles['subtool-item']
    }
    render() {
        const { showComponentEdit, showSubEdit } = this.props.data
        return <div className={styles["subtool"]}>
            <div className={styles["subtool-container"]}>
                {
                    this.subTools.map((item, index) => {
                        return <div onClick={item.handler} className={this.getClassName(item.text)} key={index}>
                            <img src={item.icon}></img>
                            <div>{item.text}</div>
                        </div>
                    })
                }
            </div>
            {
                showComponentEdit ? <ComponentEdit></ComponentEdit> : ''
            }
            {
                showSubEdit ? <TableTool></TableTool> : ''
            }
        </div>
    }
}