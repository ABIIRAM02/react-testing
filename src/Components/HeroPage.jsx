"use client";

import { useState } from "react";

const HeroPage = () => {
  const [text, setText] = useState(false);
  const [timeOutText, setTimeOutText] = useState(false);

  return (
    <main className="flex flex-col gap-10">
      <section className="flex flex-col gap-5 text-center">
        <div>hello abii</div>
        <button>Click Me</button>
        <div>
          <label htmlFor="myInput">Enter something basted: </label>
          <input type="text" id="myInput" />
        </div>
        <input type="text" placeholder="Search..." />
        <input type="text" defaultValue="Good Day abi" />
      </section>

      <section>
        {text && <h2>Hakunamatata!!!</h2>}
        <button
          onClick={() => {
            setText(!text);
          }}
        >
          Toggle Text
        </button><br />

        <br /><hr /><br />

        {timeOutText && <h2>Boom , hahaaw..</h2>}
        <button
          onClick={()=>{
            setTimeout(() => {
              setTimeOutText(!timeOutText);
            }, 3000)
          }}
        >
          Toggle Timeout Text
        </button>
        
      </section>
    </main>
  );
};

export default HeroPage;
