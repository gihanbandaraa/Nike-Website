import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <div
      className="flex justify-between 
      items-center max-lg:flex-col gap-10 w-full max-container"
      id="about-us"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold max-w-lg">
          We Provide You{" "}
          <span className="text-coral-red inline-block mt-3"> Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Nike shoes are known for their superior quality, innovative designs,
          and unmatched comfort. Perfect for any activity, they offer the ideal
          blend of style and performance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and exellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </div>
  );
};

export default SuperQuality;
