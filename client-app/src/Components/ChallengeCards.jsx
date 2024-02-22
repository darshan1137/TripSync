import React from 'react';

function ChallengeCards() {
  return (
    <><div className="flex flex-col text-center mt-10 w-full justify-center items-center">
    <h1 className="text-3xl font-medium title-font text-gray-900 tracking-widest border-b-2 border-blue-500 pb-2 mb-4">Challenges</h1>
  </div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
      
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
              <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Buy a local Product </h2>
                              <p className="text-gray-500">Points</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
              <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Help local People </h2>                <p className="text-gray-500">Points</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
              <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Learn a Local language </h2>                <p className="text-gray-500">Points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default ChallengeCards;