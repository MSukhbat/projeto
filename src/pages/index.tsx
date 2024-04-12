import { useState } from "react";

export default function Home() {
  const [backgroundImageURL, setBackgroundImageURL] = useState("");
  const [url, setUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const changeURL = () => {};
  return (
    <div className=" bg-gradient-to-bl from-violet-700 via-black to-indigo-800 h-screen w-screen  flex justify-center">
      <div className="w-[588px] h-[712px] flex-col justify-end items-center inline-flex">
        <div className="h-50 w-28 flex justify-evenly flex-col">
          <div>
            <img
              className="rounded-full w-28 h-28"
              src="https://i.pinimg.com/236x/31/09/09/3109096ed3be7cedba30ce27c0e5c525.jpg"
              alt=""
            />
          </div>
          <div className="text-white ">@sukhbat_.q</div>
        </div>
        <div className="h-16 flex items-center">
          {/* <button className="w-16 h-6 bg-white bg-opacity-10 rounded-full border border-white border-opacity-50"></button> */}
          <button onClick={() => setBackgroundImageURL("image1.jpg")}>
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="flexSwitchCheckDefault"
            ></label>
          </button>
        </div>
        <div className="w-[588px] h-[300px] flex flex-col justify-evenly">
          <button
            onClick={() => setIsOpen(true)}
            className="flex  w-[588px] h-[50px] bg-white bg-opacity-10 rounded-lg border border-white border-opacity-50 justify-center items-center text-white "
          >
            Inscreva-se no NLW
          </button>
          <button className="flex  w-[588px]  h-[50px] bg-white bg-opacity-10 rounded-lg border border-white border-opacity-50 justify-center items-center  text-white">
            Baixe meu e-book
          </button>
          <button className="flex  w-[588px]  h-[50px] bg-white bg-opacity-10 rounded-lg border border-white border-opacity-50 justify-center items-center  text-white">
            Veja meu portfólio
          </button>
          <button className="flex  w-[588px]  h-[50px] bg-white bg-opacity-10 rounded-lg border border-white border-opacity-50 justify-center items-center  text-white">
            Conheça o Explorer
          </button>
        </div>
        <div className="w-[588px] h-24 flex justify-center items-center">
          <div className="h-8 w-[588px] flex justify-center items-center">
            <div className="w-10 h-10 relative">
              <div className="w-0.5 h-0.5 left-[19px] top-[19px] absolute opacity-0 bg-white bg-opacity-20 rounded-full" />
              <img
                className="w-6 h-6 left-[7.25px] top-[8px] absolute"
                src="https://i.pinimg.com/236x/31/09/09/3109096ed3be7cedba30ce27c0e5c525.jpg"
                alt=""
              />
            </div>
            <div className="w-10 h-10 relative">
              <div className="w-0.5 h-0.5 left-[19px] top-[19px] absolute opacity-0 bg-white bg-opacity-20 rounded-full" />
              <img
                className="w-6 h-6 left-[7.25px] top-[8px] absolute"
                src="https://i.pinimg.com/236x/31/09/09/3109096ed3be7cedba30ce27c0e5c525.jpg"
                alt=""
              />
            </div>
            <div className="w-10 h-10 relative">
              <div className="w-0.5 h-0.5 left-[19px] top-[19px] absolute opacity-0 bg-white bg-opacity-20 rounded-full" />
              <img
                className="w-6 h-6 left-[7.25px] top-[8px] absolute"
                src="https://i.pinimg.com/236x/31/09/09/3109096ed3be7cedba30ce27c0e5c525.jpg"
                alt=""
              />
            </div>
            <div className="w-10 h-10 relative">
              <div className="w-0.5 h-0.5 left-[19px] top-[19px] absolute opacity-0 bg-white bg-opacity-20 rounded-full" />
              <img
                className="w-6 h-6 left-[7.25px] top-[8px] absolute"
                src="https://i.pinimg.com/236x/31/09/09/3109096ed3be7cedba30ce27c0e5c525.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
