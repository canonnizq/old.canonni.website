import React from "react";
import { data } from "./data";

import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <body className="flex flex-col justify-center items-center m-8 font-mono">
      <Header />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {Object.entries(data).map(([_key, { name, emoji, description }]) => (
          <Card
            name={name}
            emoji={emoji}
            description={description}
            status={async () => {
              try {
                const response = await fetch(
                  `http://${name}.canonni.website/`,
                  {
                    method: "HEAD",
                  }
                );
                return response.ok;
              } catch (error) {
                return false;
              }
            }}
          />
        ))}
      </div>
      <Footer />
    </body>
  );
}

export default App;
