import React, { useEffect, useState } from "react";
import DragDrop from "./DragDrop";
import JsonPreview from "./JsonPreview";
import "./index.css";

export default function App() {
  const [show, setShow] = useState(false);
  let [user, setUser] = useState([]);
  let info = { title: "Anlık JSON Çıktısı / Realtime JSON Output" };
  
  useEffect(() => {
    getJson();
  }, []);

  const onDrag = () => setShow(true);

  const getJson = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setUser(response));
  };

  return (
    <div className="container grid grid-cols-3 gap-4 mx-auto px-4 space-x-4 h-screen">
      <div className="col-span-1 border-2 blue-border border border-indigo-500 my-8 bg-blue-mix">
        <div onDrag={() => onDrag()}>
          <DragDrop />
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-1 blue-border border border-indigo-300 my-8">
        <JsonPreview info={info} {...(show ? (user = { user }) : null)} />
      </div>
    </div>
  );
}
