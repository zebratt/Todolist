import axios from 'axios'
import { notification } from 'antd'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(config => {
    Object.assign(config, {
        data: qs.stringify(config.data)
    })

    return config
})

axios.interceptors.response.use(
    res => {
        const { data } = res

        if (data.code !== 0) {
            notification.error({
                message: data.message
            })
        }

        return data
    },
    error => {
        notification.error({
            message: '网络异常，请检查网络连接'
        })
    }
)

export default axios
