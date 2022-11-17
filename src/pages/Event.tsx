import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { SideBar } from "../components/SideBar/SideBar";
import { Video } from "../components/Video/Video";

interface Params {
  slug: string;
}

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  const [teste, setTeste] = useState(false);

  return (
    <div className="flex flex-col">
      <Header menu={teste} setMenu={setTeste} />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} menu={teste} />
        ) : (
          <div className="flex-1"></div>
        )}
        <SideBar menu={teste} setMenu={setTeste} />
      </main>
    </div>
  );
};
