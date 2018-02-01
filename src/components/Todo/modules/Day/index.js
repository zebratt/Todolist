import './style.scss'
import React from 'react'
import IScroll from 'iscroll/build/iscroll-lite'

const days = 31

class Day extends React.Component {
    componentDidMount() {
        new IScroll('.m-day')
    }
    renderDays = () => {
        const doms = []

        for (let i = 1; i <= days; i++) {
            doms.push(
                <li key={i} className="item">
                    {i}
                </li>
            )
        }

        return doms
    }
    render() {
        return (
            <div className="m-day">
                <ul>{this.renderDays()}</ul>
            </div>
        )
    }
}

export default Day
