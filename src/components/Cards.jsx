const Cards = ({ hotel }) => {
  return (
    <>
      <div className='w-full max-w-48 p-5'>
        <img src={hotel.image_url} className='mb-2' />
        <div>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
            {hotel.title}
          </h5>

          <p>{hotel.description}</p>
          <a
            href={hotel.destination_url}
            target='_blank'
            className='inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
