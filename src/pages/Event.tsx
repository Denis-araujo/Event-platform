import { useParams } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { SideBar } from "../components/SideBar/SideBar"
import { Video } from "../components/Video/Video"

interface Params {
  slug: string
}

export const Event = () => {

  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div> }
        <SideBar />
      </main>
    </div>
  )
}