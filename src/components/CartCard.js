import { ITEM_IMG_CDN_URL } from "../Contants";
const CartCard = ({imageId, name, description, price})=>{
    return(
        <>
        <div className="cards w-52 p-2 m-2 bg-purple-200 shadow-xl">
            <img  src={ ITEM_IMG_CDN_URL
           +
           imageId} alt="loading" />
            <h2 className="font-bold text-xl">{name}</h2>
            {/* <h3>{cuisines.join(', ')}</h3> */}
            <h3>{description}</h3>
            <h4>Rs {price/100} </h4>
            </div>
        </>
    )
}

export default  CartCard;