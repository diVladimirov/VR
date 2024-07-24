import videoWithMonitor from "../assets/video/video-with-monitor.mp4";
import videoWithMan from "../assets/video/video-with-man.mp4";

export default function Hero() {
  return (
    <div className="pt-20 px-6">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-900 text-transparent bg-clip-text">
            {" "}
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring youe VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-600 to-purple-900 px-3 py-4 mx-3 rounded-md hover:text-black"
          >
            Start for free
          </a>
          <a className="px-3 py-4 mx-3 rounded-md border hover:text-blue-600 hover:border-blue-600">
            Documentation
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-purple-900 shadow-blue-600 mx-2 my-4"
          >
            <source src={videoWithMonitor} type="video/mp4" />
            Your browser does not support the video tag
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-purple-900 shadow-blue-600 mx-2 my-4"
          >
            <source src={videoWithMan} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div>
      </div>
    </div>
  );
}
