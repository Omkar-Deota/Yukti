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
    { text: "Perfectly Scheduled" },
    { text: "Hustle less" },
    { text: "Remake at one go" },
  
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
  };

  const textStyle = {
    fontFamily: "Arial, sans-serif", 
    fontSize: "18px",
    color: "#333", 
    marginBottom: "10px",
  };

  const answerStyle = {
    fontFamily: "Georgia, serif", 
    fontSize: "24px",
    fontWeight: "bold",
    color: "rgb(75 3 39)", 
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
