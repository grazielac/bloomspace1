export default function Header() {
    return (
        <>
            <header>
                <h1>Bluméa</h1>
                <div>
                    <img src="" alt="" />
                </div>
                <nav>
                    <search>
                        <form action="./search/">
                            <label for="search">Search</label>
                            <input type="search" id="search" name="search" />
                            <button type="submit">Search</button>
                        </form>
                    </search>
                    <button>Sign in</button>
                    <button>Register</button>
                </nav>
            </header>
        </>
    );
}