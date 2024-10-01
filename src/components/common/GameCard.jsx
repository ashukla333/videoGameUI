import React from "react";

const GameCard = ({ data }) => {
  const dateString =data?.attributes?.firstReleaseDate;
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="w-full  bg-card-background text-white shadow-md overflow-hidden relative lg:h-40 md:h-auto  flex">
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Image or Video Section */}
        <div className="relative md:w-1/6 lg:h-auto md:h-60 h-40 bg-black">
          {/* Badge positioned in the top-right for mobile */}
          <div className="absolute top-2 right-2 bg-button-accent font-bold shadow-lg text-white rounded-full h-8 w-8 flex items-center justify-center md:hidden">
            <span className="text-base text-white ">{data?.attributes?.rating?.toFixed(0)}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative md:flex-1 p-4">
          <h2 className="text-xl font-montserrat font-semibold">
            {data?.attributes?.name}
          </h2>
          <p className="text-sm text-gray-400">Release Date: {formattedDate}</p>
          <p className="mt-2 font-mulish text-sm text-gray-300 md:w-[90%]">
            {data?.attributes?.summary?.length > 250
              ? data?.attributes?.summary.slice(0, 250) + "..."
              : data?.attributes?.summary}
          </p>

          {/* Badge positioned center-right for web but more towards the bottom */}
          <div className="hidden md:flex absolute bottom-14 right-4 bg-button-accent font-bold shadow-lg text-white rounded-full h-8 w-8 flex items-center justify-center">
            <span className="text-base text-white ">{data?.attributes?.rating?.toFixed(0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
