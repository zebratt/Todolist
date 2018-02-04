import './style.scss'
import React from 'react'
import IScroll from 'iscroll/build/iscroll-lite'
import classNames from 'classnames'

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

class Day extends React.Component {
    componentDidMount() {
        new IScroll('.m-day')
    }
    renderDays = () => {
        const doms = []
        const { currDay, currMonth, clickHandler } = this.props

        for (let i = 1; i <= days[currMonth]; i++) {
            const styles = classNames({
                item: true,
                active: currDay === i
            })
            doms.push(
                <li
                    key={i}
                    className={styles}
                    onClick={() => {
                        clickHandler(i)
                    }}
                >
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
