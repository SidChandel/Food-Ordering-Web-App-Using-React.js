import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import { swiggy_api_URL } from "../Contants";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();
      // console.log(json);
      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      // setAllRestaurants(resData);
      // setFilteredRestaurants(resData);
      setFilteredRestaurants(resData);
      setAllRestaurants(resData);
      // console.log(resData);
    } catch (error) {
      console.log(error);
    }
  }

// const isOnline = useOnline();
// if(!isOnline) return <h1>offline please cheack the internet</h1>
  
  // if(filteredrestaurants?.length === 0) return <h1>Search Not Found !!!</h1>  ;
  if (!allrestaurants) return null;

  return (allrestaurants?.length === 0) ? (<ShimmerUI/>) :(
    <div className="min-h-screen">
      <div className="search-input bg-purple-300 my-5 px-5 h-10 py-2">
        <input
          type="text"
          className="input-text bg-purple-100 hover:bg-purple-50"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn bg-purple-600 text-white px-2 mx-2 rounded-md hover:bg-purple-500"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allrestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="list flex flex-wrap justify-center">
        {filteredrestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id} ><RestaurantCards {...restaurant?.info} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
