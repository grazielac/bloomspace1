export default function Footer() {
  return (
    <>
      <div className="h-50 bg-gray-200 border rounded-tl-3xl rounded-tr-3xl">
        <div>
          <div className="bg-amber-300">
            <img src="" alt="" />
            <p>Short bio about Bluméa</p>
            {/* ICONS */}
          </div>
          <div>
            <nav aria-label="Footer navigation">
              <div className="bg-gray-500 inline-block">
                <h3>Bluméa</h3>
                <ul>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-400 hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-400 hover:text-gray-900"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-400 hover:text-gray-900"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
