import { features } from "../constants/index";

export default function FeatureSection() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:6-xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-blue-600 to-purple-900 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <ul className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon;
          return (
            <li key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 text-blue-600 justify-center items-center rounded-full">
                  <FeatureIcon className="h-10 w-10" />
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
