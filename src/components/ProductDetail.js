import React,{component} from "react";
import axios from "axios";
import Header from "./Header";
import AddCart from "./AddCart";
import  "./../css/ProductDetail.css";
class ProductDetail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:[]
		};
	}
	componentWillMount(){
		var detail=this;
		axios({
			method:"get",
			url:`https://fakestoreapi.com/products/${this.props.match.params.id}`,
			params:null
		}).then(function (res){
			detail.setState({
				data:res.data
			});
			
		}).catch(function (err){
			console.log(err);
		});

	}
	render(){
		const {data}=this.state;

		return (
			 <React.Fragment>
			 		<Header />
			 		{(data.length===0)?(<div>loading...</div>):(
			 		<div className="containera">
			 			<div className="groupdetail">
				 			<div className="ImageProduct">
				 				<img src={data.image}  alt="no image" />
				 			</div>
				 			<div className="infoProduct">
				 				<div className="Allinf">
					 				<div className="titleProduct">
					 					{data.title}
					 				</div>
					 				<div className="priceProduct">
					 					${data.price}
					 				</div>
					 				<div className="categoryProduct">
					 					{data.category}
					 				</div>
					 				<div className="detailProduct">
					 					<b>Description:</b><p>{data.description}</p>
					 				</div>
					 				<AddCart />
					 			</div>
				 			</div>
				 		</div>
			 		</div> 
			 		)}
			 </React.Fragment>
			);
	}
}

export default ProductDetail;