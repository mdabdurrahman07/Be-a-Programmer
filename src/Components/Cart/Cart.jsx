/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const Cart = ({AllInfo , TotalCredit, Remaining}) => {

    return (
        <div  className="w-96 h-auto bg-white shadow-2xl rounded-lg space-y-5 p-5">
       <div className="space">Credit Hour Remaining {Remaining} hr</div>
       <hr />
       <div className="p-2 space-y-2">{
        AllInfo.map(items =>(
            
            <h1 className="text-center font-medium text-[#1c1b1b99]">{items.name}</h1>
        ))
        }</div>
       <hr />
       <div>Total Credit Hour : {TotalCredit}</div>
        </div>
    );
};

export default Cart;