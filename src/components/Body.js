import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";


import {filterData} from "../utils/helper"
import useOnline from "../utils/useOnline";
const Body = () => {
                     const [allRestaurants, setAllRestaurants] = useState([]);
                     const [filteredRestaurants, setFilteredRestaurants] = useState([]);
                     const [searchText, setSearchText] = useState("");

                       useEffect(() => {getRestaurants();}, []);
                       async function getRestaurants()
                      {
                         try {
                           const data = await fetch(
                             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3667296&lng=72.819814&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
                           );
                           const json = await data.json();
                           console.log({ json });
                           setAllRestaurants(json.data?.cards);
                           setFilteredRestaurants(json.data?.cards);
                         } catch (error) {
                           console.log({ error });
                         }
                      }

                      const isOnline = useOnline();
 
                      if(!isOnline){
                        return<h1>You are not online</h1>
                      };

                       if (!allRestaurants) 
                       return null;

                        return allRestaurants?.length === 0 ? (<Shimmer />) :
                         (
                            <>
                             <div className="search-container p-5 bg-pink-50  my-5">
                               <input
                                 type="text"
                                 className="p-2 focus:bg-green-400 m-2"
                                 placeholder="Search"
                                 value={searchText}
                                 onChange={(e) => {
                                   setSearchText(e.target.value);
                                 }}
                               />
                                 <button
                                   className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-full"
                                   onClick={() => {
                                     const data = filterData(searchText, allRestaurants);
                                     setFilteredRestaurants(data);
                                   }}
                                 >
                                   {" "}
                                   Search{" "}
                                 </button>
                               </div>

                                <div className="flex flex-wrap">
                                  {filteredRestaurants.map((restaurant) => {
                                    return (
                                      <Link to={"restaurant/"+restaurant.data.data.id} key={restaurant.data.data.id}>
                                      <RestaurantCard{...restaurant.data.data} />
                                      </Link>
                                    );
                                  })}
                                </div>
                              </>
                              );
                    };
export default Body;
