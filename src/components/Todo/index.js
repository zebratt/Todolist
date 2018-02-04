import './style.scss'
import React from 'react'
import Month from './modules/Month'
import Day from './modules/Day'
import { todoActions as actions } from '../../actions'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Checkbox, Modal, Icon, Input } from 'antd'
import ApiService from '../../service/ApiService'
import classNames from 'classnames'

@inject(store => ({ ...store.todoStore }))
@observer
export default class TodoList extends React.Component {
    @observable addModalVisible = false
    @observable newItemValue = ''

    @action
    changeVisible = visible => {
        this.addModalVisible = visible
    }

    @action
    onNewItemValueChange = value => {
        this.newItemValue = value
    }

    @action
    clearNewItemValue = () => {
        this.newItemValue = ''
    }

    onAddItemConfirm = async () => {
        const { currMonth, currDay } = this.props
        const date = `2018-${currMonth}-${currDay}`
        const content = this.newItemValue
        const res = await ApiService.post('/api/todos/save', {
            date,
            content
        })

        if (res.code === 0) {
            actions.insertNewItem({
                id: res.data.id,
                date,
                content
            })

            this.changeVisible(false)
            this.clearNewItemValue()
        }
    }

    onCheckClick = item => {
        const nextItem = Object.assign(item, {
            completed: !item.completed
        })

        actions.updateItem(nextItem)
    }

    componentDidMount() {
        const { currMonth, currDay } = this.props
        const date = `2018-${currMonth}-${currDay}`

        actions.loadTodos(date)
    }

    componentWillReceiveProps(nextProps) {
        const { currMonth, currDay } = this.props

        if(currMonth !== nextProps.currMonth || currDay !== nextProps.currDay){
            actions.loadTodos(`2018-${nextProps.currMonth}-${nextProps.currDay}`)
        }
    }

    render() {
        const { todos, currMonth, currDay } = this.props

        return (
            <div className="g-page-home">
                <Month
                    currMonth={currMonth}
                    clickHandler={nextMonth => {
                        actions.updateMonth(nextMonth)
                    }}
                />
                <Day
                    currDay={currDay}
                    currMonth={currMonth}
                    clickHandler={nextDay => {
                        actions.updateDay(nextDay)
                    }}
                />
                <div className="content-main">
                    <div className="title">
                        <Icon
                            className="icon-add"
                            type="plus-circle-o"
                            onClick={() => {
                                this.changeVisible(true)
                            }}
                        />
                    </div>
                    <ul className="items">
                        {todos.map((todo, idx) => {
                            const styles = classNames({
                                completed: todo.completed
                            })
                            return (
                                <li key={idx} className="item">
                                    <Checkbox
                                        checked={todo.completed}
                                        onClick={() => {
                                            this.onCheckClick(todo)
                                        }}
                                    >
                                        <span className={styles}>{todo.content}</span>
                                    </Checkbox>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Modal
                    title="添加新项目"
                    visible={this.addModalVisible}
                    onOk={this.onAddItemConfirm}
                    onCancel={() => {
                        this.changeVisible(false)
                        this.clearNewItemValue()
                    }}
                >
                    <Input
                        placeholder="请输入条目内容"
                        value={this.newItemValue}
                        onChange={eve => {
                            this.onNewItemValueChange(eve.target.value)
                        }}
                    />
                </Modal>
            </div>
        )
    }
}
