import React,{Component} from 'react'
import styles from './formTool.module.css'

export default class FormTool extends Component{
    render(){
        return (
            <div className={styles["form_tool_container"]}>
                <div className={styles["form_tool_header"]}>导入表格</div>
                <div className={styles["form_tool_content"]}>
                    <input type="file" accept="text/html"></input>
                </div>
            </div>
        )
    }
}