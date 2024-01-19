export default function Number({number}) {

  return(
    <div className="relative flex place-content-center">
      <div className=" flex place-content-center place-items-center h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] rounded-full text-[40px] lg:text-[70px] bg-red-400 text-white ">
      {number}
      </div>
    </div>
  )
}
