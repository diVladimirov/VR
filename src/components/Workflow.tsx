import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { LuCheckCircle } from "react-icons/lu";

export default function Workflow() {
  return (
    <div className="mt-20">
      <h3 className="text-3xl sm:text-5xl lg:text:6xl text-center mt-6 tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-blue-600 to-purple-900 text-transparent bg-clip-text">
          {" "}
          coding workflow
        </span>
      </h3>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code picture" />
        </div>
        <ul className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <li key={index} className="flex mb-12">
              <div className=" flex text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <LuCheckCircle />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
