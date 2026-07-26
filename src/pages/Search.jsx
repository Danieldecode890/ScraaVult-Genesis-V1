import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className="page">
      <h1>🔍 Search</h1>

      <div className="wallet-card">

        <input
          type="text"
          placeholder="🔍 Search your vault..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <br /><br />

        {search === "" ? (
          <p>Start typing to search...</p>
        ) : (
          <div className="transaction-card">

            <h3>Results</h3>

            <p>Searching for: <strong>{search}</strong></p>

            <p>
              More search features will be available as your
              ScraaVult grows.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Search;