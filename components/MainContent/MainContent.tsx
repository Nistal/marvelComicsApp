import React, { useContext, useEffect, useState } from "react";
import MainC from "./style.module.scss";
import ComicList from "@components/Atom/ComicList";
import Image from "next/image";
import { DataContext } from "app/context/DataContext";
import { IConttext as TConttext } from "app/context/types";
import { getComics } from "services/mainContent.service";

interface IComisc {
  title: string;
}
const MainContent = () => {
  const { state } = useContext(DataContext) as TConttext;
  const [comics, setComics] = useState([] as IComisc[]);

  useEffect(() => {
    getComics(setComics)
  }, []);

  const completeList = () => {
    let list =
      state != ""
        ? comics.filter((comic: IComisc) => comic.title.toLocaleLowerCase().includes(state.toLocaleLowerCase()))
        : comics;
    return (
      <ul style={{ border: "1px solid silver", padding: 0 , backgroundColor: '#ecf0f1', overflow: "scroll"  , height: '70vh'}}>
        {list.map((comic: any, key: number) => (
          <ComicList comic={comic} key={key} />
        ))}
      </ul>
    );
  };

  return (
    <div className={MainC.main__Content}>
      {comics.length > 0 ? (
        completeList()
      ) : (
        <div className={MainC.loader}>
          <Image
            src={"/loader.gif"}
            width={500}
            height={500}
            alt={"Logo marvel"}
          />
          <p>Cargando Comics...</p>
        </div>
      )}
    </div>
  );
};

export default MainContent;
