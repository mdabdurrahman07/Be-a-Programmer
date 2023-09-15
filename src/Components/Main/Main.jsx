/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { CgDollar } from "react-icons/cg";
import { FaHourglass } from "react-icons/fa6";
import Cart from './../Cart/Cart';
const Main = ({AllCards}) => {
    const [AllInfo , SetAllInfo] = useState([])
    const [TotalCredit , SetTotalCredit] = useState()
    const [Remaining , SetRemaining] = useState()
  
    
    const handleCartData = (infos) =>{
      const isAvailable = AllInfo.find(common => common.id === infos.id)
      let count = infos.credit
      if(isAvailable){
        return toast.error('Already Added to Cart', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
      }
      else{
        AllInfo.forEach(moneyValue =>
          count += moneyValue.credit)
        if(count > 20){
          toast.error('Credit Limit Only 20 Hours', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
              toast.warn('Credit Hour Remaining Zero', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
  
          }


        else{
          SetTotalCredit(count)
          SetRemaining( 20 - count)  
          SetAllInfo([...AllInfo , infos])
        }
                 
        
          }
   


    


     
    }
    return (
       <>
       {/* parent  div start*/}
       <div className="flex justify-evenly mt-5">
        {/* child div one start */}
       <div className="grid grid-cols-1 md:grid-cols-3 w-2/3 gap-4">
      
                        {
                                AllCards.map(infoOfCard =>(
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-5 pt-5">
                                    <img src={infoOfCard.img} alt="Course Subject pictures" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="text-xl font-semibold">{infoOfCard.name}</h2>
                                    <p className="text-base font-normal text-[#1c1b1b99]">{infoOfCard.details}</p>
                                    <div className="flex justify-between items-center gap-5">
                                        <p className="flex justify-center items-center gap-2 text-[#1c1b1b99] font-medium text-lg"><CgDollar /> Price: <span>{infoOfCard.price}</span></p>
                                        <p className="flex justify-center items-center gap-2 text-[#1c1b1b99] font-medium text-lg"><FaHourglass/> Credit: <span>{infoOfCard.credit}hr</span></p>
                                    </div>
                                    <div className="card-actions">
                                    <button onClick={() => handleCartData(infoOfCard)} className="px-28 py-2 rounded-lg text-lg font-semibold  bg-blue-500 text-white">Select</button>
                                    </div>
                                </div>
                                </div>
                                ))
                        }
                        <div> <ToastContainer />
                        <ToastContainer /></div>
        </div>
          {/* child div one end */}
        {/* child div two start */}
        <div>
            <Cart AllInfo={AllInfo} TotalCredit={TotalCredit} Remaining={Remaining}></Cart>
         
        </div>
         {/* child div two end*/}
         {/* parent  div end*/}
       </div>
       </>
    );
};

export default Main;