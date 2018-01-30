import './Month.scss'
import { h, Component } from 'preact'

const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

class Month extends Component {
    render() {
        return (
            <div className="m-month">
                {months.map(item => (
                    <div key={item} className="item">
                        {item}
                    </div>
                ))}
            </div>
        )
    }
}

export default Month
