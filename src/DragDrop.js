import React, { useState } from "react";

export default function DragToReorderList() {
  const items = [
    { title: "1. Drag & Drop Item" },
    { title: "2. Drag & Drop Item" },
    { title: "3. Drag & Drop Item" },
    { title: "4. Drag & Drop Item" },
  ];

  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  };

  const [list, setList] = useState(items);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  const onDragStart = (e) => {
    const initialPosition = Number(e.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });
  };

  const onDragOver = (e) => {
    e.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(e.currentTarget.dataset.position);
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = () => {
    setList(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  return (
    <section>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              data-position={index}
              draggable
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragLeave={onDragLeave}
            >
              <li className="my-8 mx-8 bg-dark-blue text-center border border-indigo-700 text-white rounded-sm hover:bg-white hover:text-dark-blue">
                {item.title}
              </li>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
