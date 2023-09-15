/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const Cart = ({AllInfo , TotalCredit, Remaining}) => {

    return (
        <div  className="w-96 h-auto bg-white shadow-2xl rounded-lg space-y-5 p-5">
       <div className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {Remaining} hr</div>
       <hr />
       <div><h1 className="font-bold text-xl">Course Name</h1></div>
       <div className="p-2 space-y-2">{
        
        AllInfo.map((items , idx) =>(
            
            <h1 className="text-left font-medium text-[#1c1b1b99]"><span>{idx +1}  {items.name}</span></h1>
        ))
        }</div>
       <hr />
       <div><span className="font-medium">Total Credit Hour</span> : {TotalCredit}</div>
        </div>
    );
};

export default Cart;