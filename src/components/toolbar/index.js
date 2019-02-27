import React, { Component } from 'react';
import SubEdit from './subEdit'
import StyleTool from './styleTool'
import FormTool from './formTool'
import styles from './index.module.css'

export default class ToolBar extends Component {
    constructor() {
        super()
        this.tools = {
            right: [
                { text: '编辑', icon: require('../../styles/icon/edit/edit.png'), iconSize: [18, 16], handler: this.onEditClick.bind(this) },
                { text: '工具', icon: require('../../styles/icon/tools/tool.png'), iconSize: [18, 18], handler: this.onToolClick.bind(this) }
            ],
            left: [
                { text: '撤销', icon: require('../../styles/icon/tools/back.png'), iconSize: [14, 14], handler: this.onUndoClick.bind(this) },
                { text: '还原', icon: require('../../styles/icon/tools/back.png'), iconSize: [14, 14], handler: this.onRedoClick.bind(this) },
                { text: '保存', icon: require('../../styles/icon/other/save.png'), iconSize: [14, 14], handler: this.onSaveClick.bind(this) },
                { text: '模板', icon: require('../../styles/icon/style/style1.jpg'), iconSize: [14, 18], handler: this.onModuleClick.bind(this) },
                { text: '自定义样式', icon: require('../../styles/icon/style/style.png'), iconSize: [17, 13], handler: this.onSetStyleClick.bind(this) }
            ]
        }
    }
    onEditClick() {
        const { updateEditTool } = this.props.data.actions
        const { showTool } = this.props.data
        updateEditTool(!showTool)
    }

    onToolClick() {
        const { updateFormTool } = this.props.data.actions
        const { showFormTool } = this.props.data
        updateFormTool(!showFormTool)
    }
    onUndoClick() { }
    onRedoClick() { }
    onSaveClick() { }
    onModuleClick() { }
    onSetStyleClick() {
        const { updateSetStyle } = this.props.data.actions
        const { showSetStyle } = this.props.data
        updateSetStyle(!showSetStyle)
    }
    getClassName(text) {
        const { showTool, showFormTool, showSetStyle } = this.props.data
        if (text === '编辑') {
            return styles["tool-btn"] + ' ' + (showTool ? styles['tool-btn-selected'] : '')
        } else if (text === '工具') {
            return styles["tool-btn"] + ' ' + (showFormTool ? styles['tool-btn-selected'] : '')
        } else if (text === '自定义样式') {
            return styles["tool-btn"] + ' ' + (showSetStyle ? styles['tool-btn-selected'] : '')
        }
        return styles["tool-btn"]
    }
    render() {
        const { data } = this.props
        const { showTool, toolProps, showFormTool, showSetStyle } = data
        const { updateSubEdit, updateComponentEdit } = this.props.data.actions
        let toolData = {
            ...toolProps,
            actions: {
                updateSubEdit,
                updateComponentEdit
            }
        }
        return (
            <div className="container">
                <div className={styles["toolbar-container"]}>
                    <div className={`${styles["toolbar-left"]} flex-row`}>
                        {
                            this.tools.right.map((item, index) => {
                                return <div onClick={item.handler} key={index} className={this.getClassName(item.text)}>
                                    <img src={item.icon} style={{ width: item.iconSize[0], height: item.iconSize[1] }}></img>
                                    <div>{item.text}</div>
                                </div>
                            })
                        }
                    </div>
                    <div className={`${styles["toolbar-right"]} flex-row`}>
                        {
                            this.tools.left.map((item, index) => {
                                return <div onClick={item.handler} key={index} className={this.getClassName(item.text)}>
                                    <img src={item.icon} style={{ width: item.iconSize[0], height: item.iconSize[1] }}></img>
                                    <div>{item.text}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
                {
                    showTool ? <SubEdit data={toolData}></SubEdit> : ''
                }
                {
                    showFormTool ? <FormTool></FormTool> : ''
                }
                {
                    showSetStyle ? <StyleTool></StyleTool> : ''
                }
            </div>
        )
    }

}