import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function RestaurantMenu() {
  const { id } = useParams();


  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

const addFoodItem = (item) => {
  dispatch(addItem(item));

};

  return !restaurant ? (<Shimmer />) :
    (
      <div className="menu  flex flex-wrap">
        <div>
          <h1>Restaurant id: {id}</h1>
          <h1>{restaurant.name}</h1>
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
          <h1>{restaurant.area}</h1>
          <h1>{restaurant.city}</h1>
          <h1>{restaurant.avgRating} stars</h1>
        </div>
        

        <div className="menu_item">
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <div className="flex">
              <li className="p-1 ml-6 font-bold flex flex-wrap border-b-4  border-b-indigo-500" key={item.id}>{item.name} <button className="mx-8  bg-green-50" onClick={() => addFoodItem(item)}>Add</button></li>
              </div>))}
          </ul>
        </div>
      </div>
    );
}

export default RestaurantMenu; 