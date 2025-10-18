export default function Feed() {
  return (
    <>
      <div className="p-4 md:0-8">
        <h1 className="text-2xl font-bold mb-6">Upcoming Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* EVENT CARD */}
          <div className="bg-white rounded-xl shadow p-4">
            <div className="w-1/2">
              <img
                src="/src/assets/sample.jpg"
                alt="Event"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <h2 className="font-bold text-lg mb-1">Event Name</h2>
            <p className="text-sm text-gray-500 mb-2">Date: 18 Oct 2025</p>
            <p className="text-gray-700 text-sm line-clamp-3">
              Short description of the event
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
