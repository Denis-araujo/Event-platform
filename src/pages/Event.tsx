import { Header } from "../components/Header/Header"
import { SideBar } from "../components/SideBar/SideBar"
import { Video } from "../components/Video/Video"

export const Event = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <SideBar />
      </main>
    </div>
  )
}