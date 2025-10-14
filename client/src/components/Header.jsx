export default function Header() {
  return (
    <>
      <header className="p-4 border-b">
        <div className="flex justify-between items-center cursor-pointer">
          <h1 className="text-2xl font-bold">Bluméa</h1>
          <div>
            <img src="" alt="" />
          </div>
          {/* Search + buttons */}
          <div className="flex items-center space-x-4">
            <form action="./search/" className="flex items-center space-x-2 cursor-pointer">
              <label htmlFor="search" className="sr-only cursor-pointer">Search</label>
              <input type="search" id="search" name="search" placeholder="Search..." className="border rounded-3xl px-2 py-1"/>
              <button type="submit" className="bg-gray-200 px-3 py-1 rounded-3xl cursor-pointer">Search</button>
            </form>

            <button className="cursor-pointer">Sign in</button>
            <button className="px-3 py-1 rounded-3xl bg-gray-500 text-white cursor-pointer">Register</button>
          </div>
        </div>
      </header>
    </>
  );
}
