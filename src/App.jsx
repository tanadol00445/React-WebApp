import NotFound from './Pages/NotFound';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import ProductPage from './Pages/ProductPage';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path = "/about"element={<AboutPage/>}/>
        <Route path = "/products"element={<ProductPage/>}/>
        <Route path = "*" element={<NotFound/>}/> {/* path=* คือหน้าที่ไม่ได้ระบุ path จะขึัน 404 */}
      </Route>)
  )
  return <RouterProvider router={router}/>
}

export default App
