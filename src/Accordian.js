import { useState } from "react";

export default function Accordian(props) {
  const [showId, setShow] = useState(0);
  function handleShow(id) {
    setShow(id);
  }
  return (
    <div>
      <h1>Accordian Panel</h1>
      <div>
        {props.InitialItems.map((item) => {
          return (
            <div
              style={{
                border: "1px solid gray",
                textAlign: "left",
                padding: "10px 20px"
              }}
            >
              <h2>{item.name}</h2>

              {showId !== item.id && (
                <button onClick={() => handleShow(item.id)}>
                  show content
                </button>
              )}
              {showId === item.id && <p>{item.content}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
