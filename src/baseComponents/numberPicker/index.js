import React, { Component } from 'react';
import styles from './index.module.css'

export default class NumberPicker extends Component {
    constructor() {
        super();
        this.state = { number: 0, max: 10000, min: 0 };
    }

    onClickAdd() {
        const { number, max } = this.state;
        if (number < max) {
            this.setState({ number: (number + 1) });
        }
        this.setValue();
    }

    onClickReduce() {
        const { number, min } = this.state;
        if (number > min) {
            this.setState({ number: (number - 1) });
        }
        this.setValue();
    }

    setValue() {
        setTimeout(function () {
            const { number } = this.state;
            const { input } = this.refs;
            input.value = number;
        }.bind(this), 10)
    }

    onChange(e) {
        const { max, min, number } = this.state;
        const { input } = this.refs;
        if (!isNaN(Number(input.value))) {
            if (input.value != "") {
                if (input.value <= max && input.value >= min) {
                    this.setState({ number: Math.floor(Number(input.value)) });
                    input.value = Math.floor(Number(input.value));
                } else {
                    input.value = number;
                }
            }
        } else {
            input.value = number;
        }
    }

    componentDidMount() {
        const { value, maxNum, minNum } = this.props;
        const { number, max, min } = this.state;
        let state = { number: ((value != undefined) ? value : number), max: ((maxNum != undefined) ? maxNum : max), min: ((minNum != undefined) ? minNum : min) };
        this.setState(state);
        this.setValue();
    }

    getNumber() {
        return this.state.number;
    }

    render() {
        const { number } = this.state;
        return (
            <div className={styles["number-picker-container"]} style={{ border: '1px solid #ccc' }}>
                <input ref="input" type="text" className={styles["number-picker-text"]} onChange={e => { this.onChange(e) }} style={{ borderWidth: '0' }} defaultValue={number} />
                <div style={{ display: 'flex' }}>
                    <div className={styles["number-picker-add-btn"]} onClick={() => { this.onClickAdd() }}>{'+'}</div>
                    <div className={styles["number-picker-delete-btn"]} onClick={() => { this.onClickReduce() }}>{'-'}</div>
                </div>
            </div>
        )
    }
}