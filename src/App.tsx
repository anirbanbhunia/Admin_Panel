import { BrowserRouter,Routes,Route } from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/Loader"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Customer = lazy(() => import("./pages/Customer"))
const Products = lazy(() => import("./pages/Products"))
const Transaction = lazy(() => import("./pages/Transaction"))
const NewProduct = lazy(() => import("./pages/management/NewProduct"))
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"))
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"))


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          {/* main sections */}
      
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/customer" element={<Customer/>}/>
          <Route path="/admin/products" element={<Products/>}/>
          <Route path="/admin/transaction" element={<Transaction/>}/>

          {/* charts */}

          {/* apps */}
          
          {/* management */}
          <Route path="admin/products/new" element={<NewProduct/>}/>
          <Route path="admin/products/:id" element={<ProductManagement/>}/>
          <Route path="admin/transaction/:id" element={<TransactionManagement/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App