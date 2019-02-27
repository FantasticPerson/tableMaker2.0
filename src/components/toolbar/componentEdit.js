import React, { Component } from 'react';
import styles from './componentEdit.module.css'

export default class ComponentEdit extends Component {
    constructor() {
        super()
        this.editIcons = [
            { hintText: '纯文本', icon: require('../../styles/icon/edit/text.png') },
            { hintText: '输入框', icon: require('../../styles/icon/edit/input.png') },
            { hintText: '单选框', icon: require('../../styles/icon/edit/radio.png') },
            { hintText: '复选框', icon: require('../../styles/icon/edit/checkbox.jpg') },
            { hintText: '输入区域', icon: require('../../styles/icon/edit/textarea.jpg') },
            { hintText: '下拉框', icon: require('../../styles/icon/edit/dropdown.png') },
        ]
    }
    render() {
        return (
            <div className={styles["component-edit-container"]}>
                <div className={styles["component-edit-header"]}>
                    可拖拽组件
                    <img src={require("../../styles/icon/edit/doubleLeftArrow.png")}></img>
                </div>
                <div className={styles["component-edit-items"]}>
                    {
                        Array.from([1, 2, 3]).map((item, i) => {
                            return (
                                <div className={styles["component-edit-wrap"]} key={i}>
                                    <div className={styles["component-edit-item"]}>
                                        <img src={this.editIcons[2 * i].icon}></img>
                                        <span>{this.editIcons[2 * i].hintText}</span>
                                    </div>
                                    <div className={styles["component-edit-item"]}>
                                        <img src={this.editIcons[2 * i + 1].icon}></img>
                                        <span>{this.editIcons[2 * i + 1].hintText}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}