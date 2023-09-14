/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { CgDollar } from "react-icons/cg";
import { FaHourglass } from "react-icons/fa6";
const Main = ({AllCards}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mx-auto">
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
                                        <p className="flex justify-center items-center gap-2 text-[#1c1b1b99] font-medium"><CgDollar /> Price: <span>{infoOfCard.price}</span></p>
                                        <p className="flex justify-center items-center gap-2 text-[#1c1b1b99] font-medium"><FaHourglass/> Credit: <span>{infoOfCard.credit}</span></p>
                                    </div>
                                    <div className="card-actions">
                                    <button className="px-28 py-2 rounded-lg text-lg font-semibold  bg-blue-500 text-white">Select</button>
                                    </div>
                                </div>
                                </div>
                                ))
                        }
        </div>
    );
};

export default Main;