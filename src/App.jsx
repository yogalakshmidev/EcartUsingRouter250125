import Home from './modules/Home'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Product from './modules/Product'
import Layout from './wrappers/Layout'
import Products from './modules/Products'
import CategoryProducts from './modules/CategoryProducts'
import Cart from './modules/Cart'


const App = () => {
  
    const routes = [
      
        {
            path:"/",
            element:<Layout />,   
            children:[
              {
                path:"",
                element:<Home />,
                hydrateFallbackElement:<div>
                Loading....
            </div> 
              },
              {
                path:"cart",
                element:<Cart />,
                hydrateFallbackElement:<div>
                Loading....
            </div>
              },
              {
                path:"products/:id",
                element:<Product />,
                hydrateFallbackElement:<div>
                Loading....
            </div>
              },
              {
                path:"/categories/:name",
                element:<CategoryProducts />
              },
              {
                path:"*",
                element:<div> 404 Page Not Found </div>
              },
              {
                  path:"products",
                  element:<Products/>
              }
            ]
        }
        
    ];

    const router = createBrowserRouter(routes, {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        }
    });

    return <RouterProvider
        router={router}
        future={{
            v7_startTransition: true,
        }}
    />

      {/* <Header />
      <RouterProvider>
        <Route path='/' element={<Home />}/>
        <Route path='/products/:id' element={<Product/>}/>
      </RouterProvider>
      
      <Footer /> */}
  
}

export default App