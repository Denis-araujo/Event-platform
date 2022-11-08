import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Lesson } from "./components/Lesson/Lesson"
import { SideBar } from "./components/SideBar/SideBar"
import { Video } from "./components/Video/Video"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

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
