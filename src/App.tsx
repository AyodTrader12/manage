import React from "react";
import { MdAddBox } from "react-icons/md";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { IoMdClose } from "react-icons/io";

const App = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  let db = {
    task: {
      id: uuid(),
      data: [
        { id: uuid(), title: "task1" },
        { id: uuid(), title: "task2" },
        { id: uuid(), title: "task3" },
        { id: uuid(), title: "clean the house" },
      ],
    },
    progress: {
      id: uuid(),
      data: [
        { id: uuid(), title: "task5" },
        { id: uuid(), title: "task6" },
      ],
    },
    Done: {
      id: uuid(),
      data: [{ id: uuid(), title: "wash plate" }],
    },
  };

  return (
    <div>
      <h1 className="text-center mt-20 text-[30px] uppercase font-bold mb-10">
        Task management
      </h1>
      <div className=" flex justify-center w-full">
        <div className="w-[1200px] border-rounded-md min-h-[400px] m-4 bg-slate-50 shadow-inner">
          {/* task title */}
          <div className="bg-slate-100 py-8 px-4 flex items-center gap-5">
            {Object.keys(db)?.map((el: string, i: number) => (
              <p
                key={i}
                className="flex-1 border-r uppercase font-bold flex items-center justify-between mr-5"
              >
                {el}
                {el === "task" && (
                  <div
                    className="w-16 h-16 rounded-full  
                  hover:bg-red-300 flex items-center justify-center mr-3 text-[30px] duration-300 transition-all cursor-pointer"
                    onClick={() => setToggle(true)}
                  >
                    <MdAddBox />
                  </div>
                )}
              </p>
            ))}
          </div>
          <br />
          <div className="bg-slate-300  px-4 flex  gap-5 h-full shadow-inner ">
            {Object.values(db)?.map((el: any, i: number) => {
              console.log(el, i);

              return (
                <div className="w-full">
                  {el.data.map((el: any, i: number) => (
                    <Card key={i} el={el} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {toggle && (
        <div className="absolute w-full h-screen top-0 backdrop-blur-md flex justify-center items-center">
          <div className="border-rounded-md bg-white p-4 h-[300px] w-[800px]">
            <IoMdClose
              size={30}
              className="cursor-pointer"
              onClick={() => setToggle(false)}
            />
            <input
              className="w-full m-4 p-2 border-rounded outline-none h-[45px]"
              placeholder="Enter your task"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
interface icard {
  id: string;
  title: string;
}
interface iprops {
  el: icard;
}
const Card: FC<iprops> = ({ el }) => {
  return (
    <div className="bg-white rounded-md h-[140px] flex justify-center items-center my-1">
      {el.title}
    </div>
  );
};
