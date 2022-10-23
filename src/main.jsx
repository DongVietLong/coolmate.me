import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App" // src/index.js
import { Provider } from "react-redux"
// import { store } from "./redux/store"
import "./index.css"
import ScrollToTop from "./components/hooks/scrollToTop"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./redux/store"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScrollToTop />
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
)
