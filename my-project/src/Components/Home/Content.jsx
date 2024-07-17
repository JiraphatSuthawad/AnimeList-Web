import axios from "axios";
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { v4 as uuidv4 } from "uuid";
import Navbars from "../commons/Navbars";
import { Spinner } from "@nextui-org/react";
import DetailView from "../commons/DetailView";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import ButtonHR from "../commons/Button/Button-HR";
import ReactPaginate from "react-paginate";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/react";
import Trending from "../Page/Trending";
import { useDebounce } from "@uidotdev/usehooks";

const Content = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAZ, setSortAZ] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [inputData, setInputData] = useState("");
  const debouncedSearchTerm = useDebounce(inputData, 500);

  const handlePageClick = (page) => {
    const newOffset = page * 20;
    setOffset(newOffset);
    setCurrentPage(page);
  };

  useEffect(() => {
    const animeRequests = async () => {
      try {
        let url = sortAZ
          ? `https://kitsu.io/api/edge/anime?sort=ratingRank`
          : `https://kitsu.io/api/edge/anime?filter[text]=${inputData}`;

        const res = await axios.get(url, {
          params: {
            "page[limit]": 20,
            "page[offset]": offset,
          },
        });

        setData(res.data.data);
        setPageCount(Math.ceil(res.data.meta.count / 20));
        setLoading(false);
        console.log(res.data.data);
      } catch (err) {
        console.log("Error", err);
        setLoading(false);
      }
    };
    animeRequests();
  }, [offset, debouncedSearchTerm, sortAZ]);

  return (
    <div className="  home-bg ">
      {selectedAnime ? (
        <DetailView
          anime={selectedAnime}
          onBack={() => setSelectedAnime(null)}
        />
      ) : (
        <>
          <Navbars
            filter={filter}
            setFilter={setFilter}
            inputData={inputData}
            setInputData={setInputData}
          />
          <Trending />
          <div className="flex justify-between items-center m-8">
            <div className="font-bold text-4xl text-inherit text-white btn ">
              Update
            </div>
            <Button
              key={uuidv4()}
              onClick={() => setSortAZ(!sortAZ)}
              color="white"
              variant="ghost"
              className="m-2 text-white text-2xl font-bold"
            >
              {sortAZ ? "Default" : "Raitng"}
            </Button>
          </div>

          <div className="mb-10">
            <div className="grid grid-cols-5 gap-4 mx-10">
              {loading ? (
                <Spinner color="secondary" labelColor="secondary" />
              ) : (
                data.map((anime) => (
                  <div className="flex-col ">
                    <Card className="bg-white/20">
                      <div
                        className="flex-col justify-center mx-10 cursor-pointer box  "
                        key={uuidv4()}
                        onClick={() => setSelectedAnime(anime)}
                      >
                        <p className="text-2xl truncate hover:text-balance text-white">
                          {anime.attributes?.titles?.en_jp}
                        </p>
                        <img
                          src={anime.attributes?.posterImage?.medium}
                          alt={anime.attributes?.titles?.en}
                          className="object-cover rounded-xl img-border justify-self-center my-5  "
                          width={270}
                        />
                      </div>
                      <CardFooter className="justify-center absolute bottom-1">
                        <ButtonHR anime={anime} />
                      </CardFooter>
                    </Card>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex justify-center pb-5 pt-10 bg-white/30 ">
            <Pagination
              showControls
              total={pageCount - 1}
              initialPage={currentPage}
              onChange={handlePageClick}
              color="secondary"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
