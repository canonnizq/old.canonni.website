import React from "react";

export default function Header() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">canonni.website</h1>
      <h2 className="text-xs">
        <abbr title="copied from" className="no-underline">
          inspired by
        </abbr>{" "}
        <a href="https://neal.fun/" className="hover:underline">
          neal.fun
        </a>
        {" • "}
        <a
          href="https://github.com/canonnizq/canonni.website/"
          className="hover:underline"
        >
          source
        </a>
      </h2>
    </div>
  );
}
