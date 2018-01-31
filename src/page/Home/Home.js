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
                <div className="content-main">todolists</div>
            </div>
        )
    }
}

export default Home
