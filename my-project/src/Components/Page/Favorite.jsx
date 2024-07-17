// ในไฟล์ pages/favorite.js
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Navbars from "../commons/Navbars";
import { Button } from "@nextui-org/button";
import { filterProps } from "framer-motion";
import DetailView from "../commons/DetailView";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleDeleteClick = (id) => {
    const removeItem = favorites.filter((anime) => anime.id !== id);
    setFavorites(removeItem);
    localStorage.setItem("favorites", JSON.stringify(removeItem));
  };

  return (
    <div className="h-dvh fav-bg">
      {selectedAnime ? (
        <DetailView
          anime={selectedAnime}
          onBack={() => setSelectedAnime(null)}
        />
      ) : (
        <>
          <Navbars />
          <div className="grid bg-pan-left ">
            <div className="text-4xl font-bold text-white m-8 btn w-fit">
              Favorite Anime
            </div>

            <div className="grid grid-cols-5 gap-4 mx-10  p-10 rounded-lg mb-10 ">
              {favorites.length > 0 ? (
                favorites.map((anime) => (
                  <div className="flex-col " key={anime.id}>
                    <Card className="bg-white/20">
                      <div className="flex-col justify-center mx-10 box ">
                        <p className="text-2xl truncate text-white ">
                          {anime.attributes?.titles?.en_jp}
                        </p>
                        <img
                          src={anime.attributes?.posterImage?.medium}
                          alt={anime.attributes?.titles?.en}
                          className="object-cover rounded-xl img-border justify-self-center my-5"
                          width={270}
                          onClick={() => setSelectedAnime(anime)}
                        />
                      </div>
                      <CardFooter className="justify-center absolute bottom-1">
                        <Button onClick={() => handleDeleteClick(anime.id)}>
                          X
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))
              ) : (
                <p className="text-white mx-10">No favorite anime yet.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Favorite;
