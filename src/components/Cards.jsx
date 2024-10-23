import HotelImg from "../assets/images/hotel-02.jpeg";

const Cards = () => {
  return (
    <>
      <div className="w-full mx-auto max-w-screen-xl flex">
        <div className="max-w-sm bg-white border rounded-2xl shadow">
          <a href="#">
            <img className="rounded-t-2xl " src={HotelImg} alt="" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Clarion Hotel
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
