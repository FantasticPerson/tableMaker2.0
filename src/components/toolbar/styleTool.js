import React, { Component } from 'react'
import styles from './styleTool.module.css'

export default class StyleTool extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={styles["style_tool_container"]}>
                <div className={styles["style_tool_title"]}>
                    已保存的样式
                </div>
                <div className={styles["style_tool_body"]}></div>
                <div className={styles["style_tool_title"]}>
                    样式编辑
                </div>
                <div className={styles["style_tool_btns"]}>
                    <div className={styles["style_tool_btn"]}>修改</div>
                    <div className={styles["style_tool_btn"]}>新增</div>
                </div>
            </div>
        )
    }
}