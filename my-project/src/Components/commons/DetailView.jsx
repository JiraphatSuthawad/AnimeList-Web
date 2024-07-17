import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import { Image, Button } from "@nextui-org/react";

function DetailView({ anime, onBack }) {
  return (
    <div
      className="h-dvh "
      style={{
        backgroundImage: `url(${anime?.attributes?.coverImage?.original})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-end ">
        <Button
          onClick={onBack}
          color="primary"
          variant="shadow"
          className="mt-10 mx-10 "
        >
          X
        </Button>
      </div>
      <Card className="m-10 bg-white/70">
        <div className="flex justify-center m-20">
          <img
            className="m-10 rounded-xl max-h-full focus-in-expand-fwd "
            key={anime?.id}
            src={anime?.attributes?.posterImage?.medium}
            alt={anime?.attributes?.titles?.en}
            width={270}
          />

          <div className="flex-col justify-center">
            <div
              key={uuidv4()}
              className="text-6xl  font-medium text-black px-10 pt-10 pb-2 focus-in-expand-fwd "
            >
              {anime?.attributes?.titles?.en_jp}
            </div>
            <hr className="border-black mx-10 my-2 focus-in-expand-fwd" />
            <span className="text-xl font-medium text-black px-10 focus-in-expand-fwd">
              {anime?.attributes?.titles?.ja_jp}
            </span>
            <div
              key={uuidv4()}
              className="text-3xl truncate font-medium text-black  px-10 pt-10 pb-2 focus-in-expand-fwd "
            >
              RatingAnime : {anime?.attributes?.averageRating}
            </div>
            <div className="text-xl font-medium text-black  text-clip p-10 focus-in-expand-fwd">
              Description : {anime?.attributes?.description}
            </div>
            <div>
              <span className="text-xl font-medium text-black  text-clip p-10 focus-in-expand-fwd">
                AgeRating : {anime?.attributes?.ageRatingGuide}
              </span>

              <span className="text-xl font-medium text-black px-10 focus-in-expand-fwd">
                Type : {anime?.attributes?.showType}
              </span>
              <span className="text-xl font-medium text-black  text-clip p-10 focus-in-expand-fwd">
                Episode : {anime?.attributes?.episodeLength}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default DetailView;
