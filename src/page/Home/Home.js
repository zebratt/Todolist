import './Home.scss'
import { h, Component } from 'preact'
import Month from './modules/Month/Month'
import Day from './modules/Day/Day'

class Home extends Component {
    render() {
        return (
            <div className="g-page-home">
                <Month />
                <Day />
                <div className="content-main">
                    <div className="title">
                        <button className="btn-add">添加项目</button>
                    </div>
                    <ul className="items">
                        <li className="item">
                            <input className="checkbox" type="checkbox"/>
                            <span>lalalalalala</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home
