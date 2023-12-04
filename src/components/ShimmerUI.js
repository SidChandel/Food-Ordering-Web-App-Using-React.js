export const MenuShimmer = () => {
    return (
        <>
        <div>hjhj</div>
        </>
    )
}
const ShimmerUI = ()=>{
    return(
        <div className="slist flex flex-wrap justify-center">
        {Array(24).fill("").map((e=> <div className="s w-52 h-56 bg-gray-400 m-2"></div>)) }
        </div>
    )
}
export default ShimmerUI;