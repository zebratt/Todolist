import './style.scss'
import React from 'react'
import Month from './modules/Month'
import Day from './modules/Day'
import { todoActions } from '../../actions'
import { observer, inject } from 'mobx-react'
import { Checkbox } from 'antd'

@inject(store => ({ ...store.todoStore }))
@observer
export default class TodoList extends React.Component {
    componentDidMount() {}
    render() {
        const { todos, currMonth, currDay } = this.props

        return (
            <div className="g-page-home">
                <Month
                    currMonth={currMonth}
                    clickHandler={nextMonth => {
                        todoActions.updateMonth(nextMonth)
                    }}
                />
                <Day
                    currDay={currDay}
                    clickHandler={nextDay => {
                        todoActions.updateDay(nextDay)
                    }}
                />
                <div className="content-main">
                    <div className="title">
                        <button className="btn-add">添加项目</button>
                    </div>
                    <ul className="items">
                        {todos.map((todo, idx) => (
                            <li key={idx} className="item">
                                <Checkbox>{todo.content}</Checkbox>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
