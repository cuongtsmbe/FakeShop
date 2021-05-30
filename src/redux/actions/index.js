import {SET_PRODUCT} from "./../const/index";

export const setProduct=(data)=>{
	return {
		type:SET_PRODUCT,
		data:data
	};

};