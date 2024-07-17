import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Navbars from "../commons/Navbars";
import { Spinner } from "@nextui-org/react";
import DetailView from "../commons/DetailView";
import { Divider } from "@nextui-org/divider";
import ButtonHR from "../commons/Button/Button-HR";

const Trending = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    const animeRequests = async () => {
      try {
        const res = await axios.get(
          `https://kitsu.io/api/edge/trending/anime`,
          {
            params: {
              "page[limit]": 20,
              "page[offset]": 0,
            },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (err) {
        console.log("Error", err);
        setLoading(false);
      }
    };
    animeRequests();
  }, []);

  return (
    <div className="">
      {selectedAnime ? (
        <DetailView
          anime={selectedAnime}
          onBack={() => setSelectedAnime(null)}
        />
      ) : (
        <>
          <div className="p-5">
            <div className="font-bold text-4xl text-white btn ">
              TOP 10 Anime
            </div>
            <div className="grid grid-cols-10 gap-5 overflow-x-auto whitespace-nowrap  ">
              {loading ? (
                <Spinner color="secondary" labelColor="secondary" />
              ) : (
                data.map((anime) => (
                  <div key={anime.id} className="box ">
                    <h4 className="text-2xl truncate text-white hover:text-balance focus-in-expand-fwd">
                      {anime.attributes?.titles?.en_jp}
                    </h4>
                    <img
                      src={anime.attributes?.posterImage?.medium}
                      alt={anime.attributes?.titles?.en}
                      className="object-cover rounded-xl img-border justify-self-center my-5 cursor-pointer"
                      onClick={() => setSelectedAnime(anime)}
                      width={270}
                    />
                  </div>
                ))
              )}
            </div>
            <Divider className="" />
          </div>
        </>
      )}
    </div>
  );
};
export default Trending;
