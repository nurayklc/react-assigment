import React, {  useState } from "react";
import DragDrop from "./DragDrop";
import "./index.css";

export default function App() {
  const [show, setShow] = useState(false);
  const [upData, setUpData] = useState([]);

  let info = { title: "Anlık JSON Çıktısı / Realtime JSON Output" };

  const onDrag = () => setShow(true);

  return (
    <div className="container grid grid-cols-3 gap-4 mx-auto px-4 space-x-4 h-screen">
      <div className="col-span-1 border-2 blue-border border border-indigo-500 my-8 bg-blue-mix">
        <div onDrag={() => onDrag()}>
          <DragDrop
            moveData={(data) => {
              setUpData(data);
            }}
          />
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-1 blue-border border border-indigo-300 my-8">
        {info.title}<br/>
        {show ? JSON.stringify(upData, null, 4) : null}
      </div>
    </div>
  );
}
