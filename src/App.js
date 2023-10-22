import "./styles.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Card from "./components/Card";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setcourses] = useState([]);
  const [loading, setloading] = useState(true);
  const [category, setcategory] = useState(filterData[0].title);

  // api calling ke liye use kiye useeffect
  async function fetchData() {
    setloading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // save data into a variable
      setcourses(output.data);
    } catch (error) {
      toast.error("something went wrong");
    }
    setloading(false);
  }
  // first render parr api call karna shirf
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div>
        <Navbar> </Navbar>
      </div>

      <div>
        <Filter
          filterData={filterData}
          category={category}
          setcategory={setcategory}
        ></Filter>
      </div>

      <div className="spinner-card">
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
};
export default App;
