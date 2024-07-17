// ในไฟล์ ../commons/Button/Button-HR.jsx
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "./Heart";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const ButtonHR = ({ anime }) => {
  const navigate = useNavigate();
  const [dis, setDis] = useState(false);

  useEffect(() => {
    // ตรวจสอบว่า anime นี้อยู่ใน localStorage หรือยัง
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((fav) => fav.id === anime.id);
    setDis(isFavorite);
  }, [anime]);

  const handleClick = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Add Favorite!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        // บันทึกข้อมูล anime ลงใน localStorage
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.push(anime);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setDis(true);
      }
    });
  };

  return (
    <Button
      onClick={handleClick}
      aria-label="Like"
      color={dis ? "danger" : undefined}
      className="box-button"
      disabled={dis}
    >
      <HeartIcon />
    </Button>
  );
};

export default ButtonHR;
