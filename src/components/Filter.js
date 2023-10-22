import React from "react";

function Filter(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setcategory = props.setcategory;
  function filterhandler(title) {
    setcategory(title);
  }
  return (
    <div className="filter-div">
      {filterData.map((data) => {
        return (
          <button
            className="button-filter"
            key={data.id}
            onClick={() => filterhandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
