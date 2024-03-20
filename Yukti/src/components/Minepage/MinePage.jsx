// import React from 'react'
import MineNavbar from "./MineNavbar";
import image from "../../assets/images/pexels-braeson-holland-9092830.jpg"
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import OutlinedTimeline from "./OutlinedTimeline";
const MinePage = () => {
  const ImageOverlay = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "black",
    whiteSpace: "nowrap",
    overflow: "hidden",
    animation: "typing 5s steps(40, end)",
  }));
  const StaticText = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "16%",
    left: 0,
    width: "100%",
    textAlign: "center",
    color: "black",
  }));

  const sentences = [
    "Promise to cut half the DC",
    "Schedule you rakes at one go",
    "Update at your convenience",
  ];
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < sentences[sentenceIndex].length) {
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        setCharIndex(0);
        setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }
    }, 150); // Change the typing speed by adjusting the interval
    return () => clearInterval(interval);
  }, [charIndex, sentenceIndex]);

  const currentSentence = sentences[sentenceIndex].substring(0, charIndex);

  return (
    <>
      <MineNavbar />
      <div style={{ position: "relative", width: "100%", height: "80vh" }}>
        <img
          src={image}
          alt="Your"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.9",
          }}
        />
        <ImageOverlay>
          <Typography variant="h2">{currentSentence}</Typography>
        </ImageOverlay>
        <StaticText>
          <Typography variant="h5" style={{ marginTop: "20px" }}>
            Our soul values: Transparency | Real-Monitoring
          </Typography>
        </StaticText>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        ></div>
      </div>
      <div>
        <OutlinedTimeline />
      </div>
    </>
  );
};

export default MinePage;
