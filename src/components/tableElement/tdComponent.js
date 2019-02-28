import React, { Component } from 'react'

export default class TdComponent extends Component {
    constructor() {
        super()
        this.mouseDown = false
        this.dragPlaceHolder = [
            {
                classNames: 'dragline-e', direction: 'e', style: {
                    position: 'absolute',
                    width: 10,
                    height: '100%',
                    backgroundColor: '#eee',
                    top: 0,
                    right: 0,
                }
            },
            { classNames: 'dragline-n', direction: 'n' },
            { classNames: 'dragline-w', direction: 'w' },
            { classNames: 'dragline-s', direction: 's' },
        ]
        this.state = {
            mouseDown: false,
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            height: 50,
            width: 100,
            direction: 'e'
        }
    }

    render() {
        const { data } = this.props
        const { startX, currentX, startY, currentY, width, height } = this.state
        let computedWidth = width + currentX - startX
        let computedHeight = height + currentY - startY

        return (
            <React.Fragment>
                <td style={{ position: 'relative', width: computedWidth, height: computedHeight, backgroundColor: '#123' }}>
                    <div style={{ width: computedWidth, height: computedHeight }}></div>
                    {
                        this.dragPlaceHolder.map((item, index) => {
                            let styles = item.style || {}
                            return (
                                <div
                                    style={styles}
                                    className={item.classNames}
                                    onMouseDown={(e) => { this.onMouseDown(e, item.direction) }}
                                />
                            )
                        })
                    }
                </td>
            </React.Fragment >
        )
    }

    onMouseDown(e, dir) {
        this.mouseDown = true
        this.setState({
            startX: e.pageX,
            currentX: e.pageX,
            direction: dir
        })
        window.addEventListener('mousemove', this.onMouseMove)
        window.addEventListener('mouseup', this.onMouseUp)
    }

    onMouseMove = (e) => {
        if (this.mouseDown) {
            this.setState({
                currentX: e.pageX
            })
        }
    }

    onMouseUp = (e) => {
        this.mouseDown = false
        window.removeEventListener('mousemove', this.onMouseMove)
        window.removeEventListener('mouseup', this.onMouseUp)
    }
}