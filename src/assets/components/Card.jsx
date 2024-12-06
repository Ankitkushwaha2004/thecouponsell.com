import React from "react";

const Card = (props) => {
	function BuyHandler(e) {
		e.preventDefault();
		console.log("You clicked submit.");
		// console.log(key)
	}
	function AddToCartHandler(e) {
		e.preventDefault();
		// console.log(key)
		console.log("You clicked Add To Cart");
	}

	return (
		<div className="card p-4  rounded-xl flex gap-4 justify-between cursor-pointer">
			<div>
				<div className="">
					<div className="text-xl">{props.company}</div>
				</div>
				<div className="">
					<div className="">
						{/* <h2 className='font-semibold'>{props.Carddiscount}</h2> */}
						<p className="text-base text-wrap">{props.description}</p>
					</div>
				</div>
				<div className="">
					<small>Valid until - {props.valid_to}</small>
					{/* <div className="">xxxxx521112</div> */}
				</div>
			</div>
			<div className="flex items-center">
				<button
					onClick={BuyHandler}
					className="buy-btn h-min px-6 py-1 rounded-lg">
					BUY
				</button>
				{/* <button onClick={AddToCartHandler} className='add-to-cart border-x border-y rounded-lg px-6 py-1 text-nowrap'>Add To Cart</button> */}
			</div>
		</div>
	);
};

export default Card;
