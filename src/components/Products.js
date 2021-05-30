import React,{component} from "react";
import "./../css/Products.css";
import Header from "./Header";
import ProductItem from "./ProductItem";
import {connect } from "react-redux";
import { Link } from 'react-router-dom';
class Products extends React.Component{
	getProduct=()=>{
		return (this.props.products).map(e=>{
			return <Link to={`/product/${e.id}`} style={{textDecoration:'none'}}><ProductItem key={e.id} data={e} /></Link>;
		});
	}
	render(){
		return (
			 <React.Fragment>
			 	<Header />
			 	<div className="ListProducts">
			 		 {this.getProduct()}
			 	</div>
			 </React.Fragment>
			);
	}
}
const mapStateToProps=(state,ownprop)=>{
	return {
		products:state.products
	};
};
const mapDispatchToProps=(dispatch)=>{
	return {

	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);