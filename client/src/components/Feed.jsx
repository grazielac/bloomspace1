export default function Feed() {
  const events = [
    {
      name: "Event 1",
      date: "18 Oct 2025",
      desc: "Description 1",
      img: "/src/assets/sample.jpg",
    },
    {
      name: "Event 2",
      date: "19 Oct 2025",
      desc: "Description 2",
      img: "/src/assets/sample.jpg",
    },
    {
      name: "Event 3",
      date: "20 Oct 2025",
      desc: "Description 3",
      img: "/src/assets/sample.jpg",
    },
  ];
  return (
    <>
      <div className="p-4 md:p-8 flex flex-col md:flex-row items-start gap-4">
        <div className="flex-1">
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold mb-6">Upcoming Events</h1>
            <button className="bg-gray-300 p-4 rounded-3xl self-start">
              Create
            </button>
          </div>
          {/* EVENT CARD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {events.map((event, photo) => (
              <div key={photo} className="bg-white rounded-xl shadow p-4">
                <img
                  src={event.img}
                  alt={event.alt}
                  className="w-full h-auto rounded-lg mb-4"
                />

                <h2 className="font-bold text-lg mb-1">{event.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
