import React, { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import ListGroup from "../components/ListGroup";
import ListItem from "../components/ui/ListItem";
import sampleTenantData from "../data/samples/sampleTenantData.json";
import { truncateText } from "../utils/truncateText";

const MessagesWidget = () => {
  const [messages, setMessages] = useState([]);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Simulate fetching the calendar data
    setMessages(sampleTenantData);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Set initial width
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef]);

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.length > 1 ? names[0][0] + names[1][0] : names[0][0];
  };

  return (
    <Card title={"Messages"} ref={containerRef}>
      {messages.length > 0 ? (
        <ListGroup mHeight={"22vh"}>
          {messages.map((messageContact, index) => (
            <ListItem
              key={index}
              title={messageContact.tenantName}
              text={truncateText(
                messageContact.mostRecentMessage,
                containerWidth
              )}
              className={"ps-2"}
              small={messageContact.timeSent}
              additionalContent={
                <div className="d-flex align-items-center justify-content-center">
                  {messageContact.imgURL ? (
                    <img
                      src={messageContact.imgURL}
                      alt={messageContact.tenantName}
                      className="img-fluid rounded-circle"
                    />
                  ) : (
                    <div className="circle-placeholder bg-primary-subtle rounded-circle">
                      <p className="text-center m-0 fs-5 fw-light p-2">
                        {getInitials(messageContact.tenantName)}
                      </p>
                    </div>
                  )}
                </div>
              }
            />
          ))}
        </ListGroup>
      ) : (
        <p>No messages available</p>
      )}
    </Card>
  );
};

export default MessagesWidget;
