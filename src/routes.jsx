import {createBrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import MyTasks from './Pages/MyTasks';
import Categories from './Pages/Categories';
import AverageGraph from './Pages/AverageGraph';
import AddTasks from './Pages/AddTasks';



export const routes =createBrowserRouter([
{
    path:'/',element:<Home/>
},
{
    path:'/MyTasks',element:<MyTasks/>
},
{
    path:'/Categories',element:<Categories/>
},
{
    path:'/AverageGraph',element:<AverageGraph/>
},
{
    path:'/MyTasks/AddTasks',element:<AddTasks/>
}

]);