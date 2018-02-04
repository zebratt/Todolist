import './style.scss'
import React from 'react'
import IScroll from 'iscroll/build/iscroll-lite'
import classNames from 'classnames'

const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

class Month extends React.Component {
    componentDidMount() {
        new IScroll('.m-month')
    }
    render() {
        const { currMonth, clickHandler } = this.props

        return (
            <div className="m-month">
                <ul>
                    {months.map((item, idx) => {
                        const styles = classNames({
                            item: true,
                            active: currMonth === idx
                        })

                        return (
                            <li
                                key={item}
                                className={styles}
                                onClick={() => {
                                    clickHandler(idx)
                                }}
                            >
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Month
