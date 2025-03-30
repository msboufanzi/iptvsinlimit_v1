import React from 'react';
import ranking from '../../assets/ranking.png';

const BrandInfo = () => {
  return (
    <div>
      {/* Main Container */}
      <div className="bg-white flex flex-col sm:flex-row text-black py-10 sm:py-16 px-6 sm:px-10 rounded-[20px] justify-center items-start space-y-10 sm:space-y-0 sm:space-x-10">
        {/* Section 1 */}
        <div className="flex flex-col ">
          <h1 className="text-2xl sm:text-3xl ">WorldWide Channels</h1>
          <p className="text-base sm:text-lg mt-2">
            Watch US, UK, CA, and international channels.
          </p>
        </div>
        {/* Divider */}
        <div className="hidden sm:block w-1 h-20 bg-black"></div>
        {/* Section 2 */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl ">On-Demand VOD</h1>
          <p className="text-base sm:text-lg mt-2">
            Enjoy a limitless selection of updated movies and series.
          </p>
        </div>
        {/* Divider */}
        <div className="hidden sm:block w-1 h-20 bg-black"></div>
        {/* Section 3 */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl ">High Quality Video</h1>
          <p className="text-base sm:text-lg mt-2">
            Stream in HD, Full HD, and 4K on all your devices without freezing.
          </p>
        </div>
      </div>
      {/* Ranking Image */}
      <div className="flex justify-center mt-8">
        <img alt="ranking" src={ranking} className="w-78 sm:w66" />
      </div>
    </div>
  );
};

export default BrandInfo;
