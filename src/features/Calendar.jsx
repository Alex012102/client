import React, { useState, useEffect } from "react";
import sampleCalendarData from "../data/samples/sampleCalendar.json";
import Card from "../components/Card";
import ListGroup from "../components/ListGroup";
import ListItem from "../components/ui/ListItem";
import parseDate from "../utils/parseDate.js";
import useWindowSize from "../hooks/useWindowSize.js";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching the calendar data
    setEvents(sampleCalendarData);
  }, []);

  const { height } = useWindowSize();
  const containerHeight = height * 0.225;

  return (
    <Card title={"Up Coming"}>
      {sampleCalendarData.length > 0 ? (
        <ListGroup mHeight={containerHeight}>
          {sampleCalendarData.map((event, index) => {
            // Call the parseDate function for each event date
            const dateParsed = parseDate(event.date); // Assuming event has a 'date' field

            return (
              <ListItem
                key={index}
                title={event.title}
                text={event.description}
                additionalContent={
                  <div className="d-flex flex-column align-items-center justify-content-center lh-1">
                    {/* Use the parsed date values here */}
                    <small className="text-primary fw-semibold">
                      {dateParsed.monthAbb.toUpperCase()}
                    </small>
                    <small className="text-primary fw-semibold fs-5">
                      {dateParsed.day}
                    </small>
                  </div>
                }
              />
            );
          })}
        </ListGroup>
      ) : (
        <p>No events available</p>
      )}
    </Card>
  );
};

export default Calendar;
