import './style.scss'
import React from 'react'
import IScroll from 'iscroll/build/iscroll-lite'

const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

class Month extends React.Component {
    componentDidMount() {
        new IScroll('.m-month')
    }
    render() {
        return (
            <div className="m-month">
                <ul>
                    {months.map(item => (
                        <li key={item} className="item">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Month
