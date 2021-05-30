import {SET_PRODUCT} from "./../const/index";
const ProductReducer = (state = [""], action) => {
	switch(action.type){
		case SET_PRODUCT:console.log("da vao action"); return action.data;
		
		break;
		  default:


      return state;
	}

};
export default ProductReducer