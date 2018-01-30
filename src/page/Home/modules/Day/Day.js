import './Day.scss'
import { h, Component } from 'preact'

const days = 31

class Day extends Component {
    renderDays = () => {
        const doms = []

        for (let i = 1; i <= days; i++) {
            doms.push(
                <div key={i} className="item">
                    {i}
                </div>
            )
        }

        return doms
    }
    render() {
        return <div className="m-day">{this.renderDays()}</div>
    }
}

export default Day
