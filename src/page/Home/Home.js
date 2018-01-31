import './Home.scss'
import { h, Component } from 'preact'
import Month from './modules/Month/Month'
import Day from './modules/Day/Day'
import Rx from 'rxjs/Rx'

class Home extends Component {
    observer
    componentDidMount() {
        const foo = Rx.Observable.create(() => {
            const intervalId = setInterval(() => {
                console.log(new Date().toLocaleTimeString())
            }, 1000)

            return () => {
                console.log('clear interval');
                clearInterval(intervalId)
            }
        })

        this.observer = foo.subscribe()
    }
    onButtonClick = () => {
        this.observer.unsubscribe()
    }
    render() {
        return (
            <div className="g-page-home">
                <Month />
                <Day />
                <div className="content-main">
                    <h1>Content Main</h1>
                    <button
                        onClick={this.onButtonClick}
                    >
                        Click me
                    </button>
                </div>
            </div>
        )
    }
}

export default Home
