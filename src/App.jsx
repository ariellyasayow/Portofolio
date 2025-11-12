//Komponen adalah fungsi yang return JSX
import { useState } from "react";

const App = () => {
  // let hello = "Hello World"; //ini contoh deklarasi variabel biasa
  const [hello, setHello] = useState("Hello World !!!"); //ini contoh deklarasi variabel state

  const handleClick = () => {
    console.log("Button di Klik");
    // hello = "Selamat Datang"; //ini cara merubah variabel biasa
    setHello("Selamat Datang"); // ini cara merubah variabel state
    // console.log(hello);
  };
  return (
    <>
      <div className="text-[25px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      <HelloWorld
        text="Ini adalah komponen Hello World 1"
        handleClick={handleClick}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-xl text-white"
        onClick={handleClick}
      >
        Click Me
      </button>
    </>
  );
};

export default App;
