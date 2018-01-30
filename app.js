import { h, render, Component } from 'preact'

class App extends Component {
    render() {
        return <div>Hello Preact 123</div>
    }
}

render(<App />, document.body, document.body.lastElementChild)
