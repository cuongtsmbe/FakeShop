import React,{component} from "react";
import "./../css/ProductItem.css";

class ProductItem extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			 <React.Fragment>
			 	<div className="ItemProduct">
			 		<div className="ImageItem">
			 			<img src={this.props.data.image} alt="no image" />
			 		</div>
			 		<div className="titleItem" >
			 			{this.props.data.title}
			 		</div>
			 		<div className="priceItem" >
			 			${this.props.data.price}
			 		</div>
			 		<div className="categoryItem" >
			 			<b>category :</b> {this.props.data.category}
			 		</div>
			 	</div>
			 </React.Fragment>
			);
	}
}

export default ProductItem;