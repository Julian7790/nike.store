import { star } from "../nike_landing_assets/assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img 
      src={imgURL} 
      alt="customer" 
      className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="max-w-sm text-center mt-8 info-text">{feedback}</p>
      <div className="flex flex-row mt-3 justify-center items-center gap-2">
      <img 
      src={star} 
      alt="star" 
      width={24}
      height={24}
      />
       <p className="info-text">({rating})</p>
    </div>
      <p className="font-palanquin text-3xl font-bold mt-2">{customerName}</p>
    </div>
  )
}

export default ReviewCard