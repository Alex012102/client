import React, { useEffect, useState, useRef } from "react";
import { truncateText } from "../../utils/truncateText.js";
import useWindowSize from "../../hooks/useWindowSize";
import ListGroup from "../../components/ListGroup";
import ListItem from "../../components/ui/ListItem";
import Card from "../../components/Card";
import sampleTenantData from "../../data/samples/sampleTenantData.json";
import CardTitle from "../../components/ui/CardTitle.jsx";
import { ArrowUp } from "react-bootstrap-icons";

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  // const { height } = useWindowSize();

  useEffect(() => {
    // Simulate fetching the messages data
    setMessages(sampleTenantData);
  }, []);

  // Set window size, for dynamic width/height, an truncate text.
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

  // Create contact initials if no user profile photo
  const getInitials = (name) => {
    const names = name.split(" ");
    return names.length > 1 ? names[0][0] + names[1][0] : names[0][0];
  };

  return (
    <div
      className="container-fluid d-flex flex-grow-1 p-5"
      id="messagesPage"
      style={{ height: "90vh" }} // Full viewport height
    >
      <Card className="d-flex flex-grow-1 w-100 h-100">
        <div
          className="row row-cols-1 row-cols-md-2 g-0" // Removes gutter spacing
          style={{ height: "100%" }}
        >
          <div
            className="col col-md-4 d-flex flex-column border-end p-3"
            ref={containerRef}
          >
            <CardTitle title={"Contacts"} />
            <ListGroup className="flex-grow-1 overflow-auto">
              {/* Allows scrolling if content exceeds height */}
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
          </div>
          <div className="col col-md-8 p-3 d-flex flex-column">
            <CardTitle title={"Contact Name"} />
            <div className="card border-0 bg-body-secondary d-flex flex-grow-1">
              <div className="w-100 h-100"></div>
              <div className="d-flex rounded-pill border-0 shadow p-2 m-2 mx-4 bg-white ">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="border-0 rounded-pill ps-2 p-1 w-100 me-3"
                />
                <button className="btn btn-primary p-0 px-2 rounded-pill">
                  <ArrowUp color="white" className="mb-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MessagesPage;
