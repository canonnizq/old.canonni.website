import React from "react";

export default function Card(props: any) {
  return (
    <a
      href={`http://${props.name}.canonni.website/`}
      className="flex flex-col border-2 p-2"
    >
      <div className="flex justify-between">
        <div className="flex items-baseline">
          <span className="text-xl">{props.emoji}</span>
          <h2 className="align-bottom">{props.name}</h2>
        </div>
        <abbr title={`${props.status ? "online" : "offline"}`}>
          <span
            className={`text-xs text-white p-1 rounded-lg ${
              props.status ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </abbr>
      </div>
      <span className="text-xs">{props.description}</span>
    </a>
  );
}
