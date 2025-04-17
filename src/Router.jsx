import { createBrowserRouter, createRoutesFromElements } from 'react-router'
import App from './App'
import Table from './components/Table'
import PostMethod from './components/PostMethod'
import Home from './components/Home'
import { Route } from 'react-router'
import PutMethod from './components/PutMethod'
import PatchMethod from './components/PatchMEthod'
import DeleteMethod from './components/DeleteMethod'



export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App />}>
            <Route path='' element={<Home/>}/>
            <Route path='get-method' element={<Table/>}/>
            <Route path='post-method' element={<PostMethod/>}/>
            <Route path='put-method' element={<PutMethod/>}/>
            <Route path='patch-method' element={<PatchMethod/>}/>
            <Route path='delete-method' element={<DeleteMethod/>}/>
    </Route>
))

// just for prectice
// export const router = createBrowserRouter([
//     {
//         path: '/',
//         Component: App,
//         children: [
//             {
//                 path: '',
//                 Component: Home
//             },
//             {
//                 path: 'get-method',
//                 Component: Table
//             },
//             {
//                 path: 'post-method',
//                 Component: PostMethod
//             },
//         ]
//     },
// ]) 