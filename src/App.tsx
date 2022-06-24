import { client } from "./lib/apollo"
import { ApolloProvider } from "@apollo/client"

import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

import "./global.css"

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
