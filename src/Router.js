import { createBrowserRouter } from 'react-router'
import App from './App'
import Table from './components/Table'
import PostMethod from './components/PostMethod'
import Home from './components/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '',
                Component: Home
            },
            {
                path: 'get-method',
                Component: Table
            },
            {
                path: 'post-method',
                Component: PostMethod
            },
        ]
    },


]) 