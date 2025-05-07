import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {store} from "./redux/store.js";
import {router} from "./router/router.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>

      </RouterProvider>
    </Provider>
  </StrictMode>,
)
