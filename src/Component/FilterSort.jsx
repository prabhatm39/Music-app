import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

export const FilterSort = () => {

// const initialGenreParams = searchParams.get("genre")
const [searchParam, setSearchParam] = useSearchParams()
const initialGenreParams = searchParam.getAll('genre') 
const [category, setCategory] = useState(
  initialGenreParams || []);

  // const location = useLocation()
  const handelGenreChange = (e) => {
    const option = e.target.value;

    let newCategory = [...category];
    if(category.includes(option)){
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1)
    }
    else{
      //add it
      newCategory.push(option)
    }
    setCategory(newCategory)

  }
//---------------------sort----------------------
const initalSortParam = searchParam.get("sortBy")
const [sortBy, setSortBy] = useState(initalSortParam || "");

const handleSortBy = (e) => {
  setSortBy(e.target.value)
}


// console.log(sortBy)
//---------------------sort----------------------




  useEffect(() => {
    if(category || sortBy){
      const param ={}
      category && (param.genre=category);
      sortBy && (param.sortBy=sortBy);
      setSearchParam(param);
    }
  },[category, setSearchParam, sortBy])


  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input type="checkbox" defaultChecked={category.includes("K-Pop")}
        value="K-Pop" onChange={handelGenreChange}  />
        <label>K-Pop</label>
      </div>
      <div>
        <input type="checkbox" defaultChecked={category.includes("Country")}
        value="Country" onChange={handelGenreChange}  />
        <label>Country</label>
      </div>
      <div>
        <input type="checkbox" defaultChecked={category.includes("Pop")}
        value="Pop" onChange={handelGenreChange}  />
        <label>Pop</label>
      </div>
      <div>
        <input type="checkbox" defaultChecked={category.includes("Holiday")}
        value="Holiday" onChange={handelGenreChange}  />
        <label>Holiday</label>
      </div>
{/* ---------------------------------------------Sort---------------------- */}
<h3>Sort</h3>
<div onChange={handleSortBy}>
  <div>
  <input type="radio" value="asc" name="sortBy" defaultChecked={sortBy === "asc"} />
<label>Ascending</label>

  </div>

<div>
  <input type="radio" value="desc" name="sortBy" defaultChecked={sortBy==="desc"}  />
  <label>Decending</label>

  </div>
</div>
      </div>
  )
}
