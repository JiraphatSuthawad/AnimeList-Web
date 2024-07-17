import React, { useState, useEffect } from "react";
import Navbars from "../commons/Navbars";
import axios from "axios";
import { Card } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import { Image, Button } from "@nextui-org/react";

function Random() {
  const [data, setData] = useState([]);
  const [random, setRandom] = useState(Math.floor(Math.random() * 1200));
  const [backgroundUrl, setBackgroundUrl] = useState("");

  useEffect(() => {
    const animeRandom = async () => {
      try {
        const res = await axios.get(`https://kitsu.io/api/edge/anime`, {
          params: {
            "page[limit]": 1,
            "page[offset]": random,
          },
        });
        const animeData = res.data.data[0];
        setData(animeData);
        setBackgroundUrl(animeData.attributes.coverImage?.original || "");
      } catch (err) {
        console.log("Error", err);
      }
    };

    animeRandom();
  }, [random]);

  console.log(data);

  const refreshPage = () => {
    setRandom(Math.floor(Math.random() * 1200));
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
      }}
    >
      <Navbars />
      <Card className="m-10 bg-white/70 ">
        <div className="flex justify-center m-10  ">
          <img
            className="m-10 rounded-xl  max-h-full  "
            key={data?.id}
            src={data?.attributes?.posterImage?.medium}
            alt={data?.attributes?.titles?.en}
          />

          <div className="flex-col justify-center focus-in-expand-fwd  ">
            <div
              key={uuidv4()}
              className="text-6xl  font-medium text-black px-10 pt-10 pb-2 focus-in-expand-fwd "
            >
              {data?.attributes?.titles?.en_jp}
            </div>
            <hr className="border-black mx-10 my-2 focus-in-expand-fwd" />
            <span className="text-xl font-medium text-black px-10 focus-in-expand-fwd ">
              {data?.attributes?.titles?.ja_jp}
            </span>
            <div
              key={uuidv4()}
              className="text-3xl truncate font-medium text-black  px-10 pt-10 pb-2 focus-in-expand-fwd"
            >
              RatingAnime : {data?.attributes?.averageRating}
            </div>
            <div className="text-xl font-medium text-black  text-clip  p-10  text-ellipsis overflow-hidden focus-in-expand-fwd">
              Description : {data?.attributes?.description}
            </div>
            <div>
              <span className="text-xl font-medium text-black  text-clip p-10 focus-in-expand-fwd">
                AgeRating : {data?.attributes?.ageRatingGuide}
              </span>

              <span className="text-xl font-medium text-black px-10 focus-in-expand-fwd">
                Type : {data?.attributes?.showType}
              </span>
              <span className="text-xl font-medium text-black  text-clip p-10 focus-in-expand-fwd">
                Episode : {data?.attributes?.episodeLength}
              </span>
            </div>
          </div>
        </div>
      </Card>
      <div className="flex justify-center">
        <Button
          onClick={refreshPage}
          className="w-max mt-0 mb-6 "
          color="danger"
          variant="shadow"
          radius="full"
          size="lg"
        >
          Random
        </Button>
      </div>
    </div>
  );
}

export default Random;
