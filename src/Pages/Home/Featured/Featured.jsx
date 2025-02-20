import featuredImage from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../componemts/SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div
      className="featured-item md:flex justify-center items-center py-8 px-16"
      style={{
        backgroundImage: `url(${featuredImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-6">
        <SectionTitle subHeading="Check it out" heading="Featured Item" />
      </div>
      <div>
        <img src={featuredImage} alt="Featured" />
      </div>
      <div className="md:ml-10 text-white bg-black bg-opacity-50 p-6 rounded-lg">
        <p>Aug 20, 2029</p>
        <p className="uppercase">Where can I get some?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, esse
          ipsam modi autem, nemo numquam ex reiciendis aliquid, laborum qui
          totam sapiente odio beatae illum pariatur nesciunt nostrum ab
          blanditiis.
        </p>
        <button className="btn btn-outline border-0 border-b-4 text-white mt-4">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Featured;
