import { IMG_CDN_URL } from "../Constants";



const RestaurantCard = ({ name,cloudinaryImageId,cuisines,avgRating }) => {
    return(
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{cuisines.join(",")}</h2>
        <h3 className="font-bold text-2xl">{name}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    )
    };


export default RestaurantCard;