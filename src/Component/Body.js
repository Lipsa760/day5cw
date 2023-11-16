import React from "react";

function Body() {
  return (
    <div className="body">
      <img
        src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Wealth and Fitness"
        className="w-full h-1/3 "
      />
      <div className="article1 text-center bg-rose-900 text-white p-8">
        <h1 className="text-4xl mb-4">Think Health. Think Massage</h1>
        <p className="font-bold text-white mb-6">
          We are open 9am to 6pm; Monday to Sunday. If you would like to
          schedule an appoinment with us, please call us at 458 456 4874 today!
        </p>
        <button className="text-center border p-3 px-16 mr-4">
          Learn More about us{" "}
        </button>
        <span>
          <button className="text-center  border p-3 px-16 ml-4">
            Contact us today
          </button>
        </span>
      </div>
      <div className="article2 bg-gray-300  p-2">
        <p className=" m-6 font-semibold text-rose-600		">
          Download the perfect wellness center pictures. Find over 100+ of the
          best free wellness center images. Free for commercial use ✓ No
          attribution required Download the perfect wellness center pictures.
          Find over 100+ of the best free wellness center images. Free for
          commercial useNo attribution required{" "}
        </p>
        <p className=" m-6 font-semibold	">
          Welcome to our Random Paragraph Generator! Our generator uses
          cutting-edge technology to create unique and informative paragraphs on
          a wide range of topics, commercial use No attribution required
          Download the perfect wellness center pictures. Find over 100+ of the
          best free wellness center images. Free for commercial use No
          attribution required{" "}
        </p>
        <p className=" m-6 font-semibold	">
          Our Free Random Paragraph Generator is user-friendly, efficient, and,
          best of all, completely free to use. No longer do you have to spend
          precious time perfect wellness center pictures. Find over 100+ of the
          best free wellness center images. Free for commercial
        </p>
        <hr className="border border-black" />
      </div>
      <div className="article3 text-center bg-gray-300 p-4">
        <h1 className="text-rose-700 text-4xl m-4">
          Family Wellness Massage Tharepy
        </h1>
        <p>977 Main Street, Suite 123, Mainland ML4512</p>
        <p>Phone no +917568694563</p>
      </div>
    </div>
  );
}

export default Body;
