import { IMG_CDN_URL } from "../Contants";
// import { Link } from "react-router-dom";
const RestaurantCards = ({cloudinaryImageId, name, cuisines, lastMileTravel, areaName,locality, avgRating}) =>{
    return(
        <>
        <div className="cards w-52 p-2 m-2 bg-purple-200 shadow-xl">
            <img  src={ IMG_CDN_URL
           +
          cloudinaryImageId} alt="loading" />
            <h2 className="font-bold text-xl">{name}</h2>
            {/* <h3>{cuisines.join(', ')}</h3> */}
            <h3>{locality}, {areaName}</h3>
            <h4>{avgRating} Stars</h4>
            </div>
            </>
    )
}

export default RestaurantCards;