import React, { Component } from 'react'
import NumberPicker from '../../baseComponents/numberPicker'
import styles from './tableTool.module.css'

export default class TableTool extends Component {
    render() {
        return (
            <div className={styles["table_tool_container"]}>
                <div className={styles["table_tool_header"]}>
                    插入表格
                </div>
                <div className={styles["table_tool_content"]}>
                    <div className={styles["table_tool_item"]}>
                        <span>行数:</span>
                        <NumberPicker></NumberPicker>
                    </div>
                    <div className={styles["table_tool_item"]}>
                        <span>列数:</span>
                        <NumberPicker></NumberPicker>
                    </div>
                </div>
                <div className={styles["table_tool_insert_btn"]}>插入</div>
            </div>
        )
    }
}