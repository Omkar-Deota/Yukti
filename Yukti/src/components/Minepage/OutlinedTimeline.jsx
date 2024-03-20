// import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  
} from "@mui/lab";
import { Typography, Divider } from "@mui/material";

function CurvedTimeline() {
  const data = [
    { text: "Event 1" },
    { text: "Event 2" },
    { text: "Event 3" },
    // Add more events as needed
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
  };

  const textStyle = {
    fontFamily: "Arial, sans-serif", // Different font for text
    fontSize: "18px",
    color: "#333", // Dark color for contrast
    marginBottom: "10px", // Add some space below the text
  };

  const answerStyle = {
    fontFamily: "Georgia, serif", // Different font for answer
    fontSize: "24px",
    fontWeight: "bold",
    color: "rgb(75 3 39)", // Cool blue color
    marginBottom: "10px",
  };

  return (
    <>
      <div style={containerStyle}>
        <div>
          <div style={textStyle}>Flexibility, Reliability and Scale</div>
          <div style={answerStyle}>The Answer is EMBER</div>
        </div>

        <Divider variant="middle"/>
        <Timeline position="alternate">
          {data.map((item, index) => (
            <TimelineItem
              key={index}
              style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            >
              <TimelineSeparator>
                <TimelineDot />
                {index < data.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography>{item.text}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </>
  );
}

export default CurvedTimeline;
