import React, { useEffect, useRef, useState } from "react";
import { debounce } from "../utils/utils";

const Debounce = () => {
  const [search, setSearch] = useState("");
  const debonceRef = useRef(debounce(fetchInput, 1000)).current;
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      debonceRef(search);
    } else {
      didMount.current = true;
    }
  }, [search]);

  function fetchInput(input) {
    console.log(`searched input ${input}`);
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
    // fetchInput(search)
  };

  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          placeholder="search here"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </form>
    </React.Fragment>
  );
};

export default Debounce;
