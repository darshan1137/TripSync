import React from "react";

function OurExpertise() {
  return (
    <div className="relative w-full flex items-center justify-center bg-white h-96">
      <div className="w-full px-32">
        <section className="bg-white border-b border-gray-500 my-0.2 font-sans font-semibold">
          <div className="max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Expertise
              </h2>

              <p className="text-gray-500 text-s">
                Delivering accurate travel insights for confident journey
                planning.
              </p>
            </div>

            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Sales
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    $4.8m
                  </dd>
                </div>

                <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Official Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    24
                  </dd>
                </div>

                <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    86
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurExpertise;
