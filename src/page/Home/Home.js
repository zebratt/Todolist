import './Home.scss'
import { h, Component } from 'preact'
import Month from './modules/Month/Month'
import Day from './modules/Day/Day'

class Home extends Component {
    onButtonClick = () => {}
    render() {
        return (
            <div className="g-page-home">
                <Month />
                <Day />
                <div className="content-main">
                    <h1>Content Main</h1>
                    <button onClick={this.onButtonClick}>Click me</button>
                </div>
            </div>
        )
    }
}

export default Home
