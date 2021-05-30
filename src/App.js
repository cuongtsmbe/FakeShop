import React, { component } from "react";
import "./App.css";

import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { setProduct } from "./redux/actions/index";
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from "axios";
import react, { Component } from "react";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.getdata = this.getdata.bind(this);
    }
    getdata = async(AppObj) => {
        await axios({
            method: "get",
            url: "https://fakestoreapi.com/products",
            data: null
        }).then(function(res) {
            AppObj.props.setProduct(res.data);
        }).catch(function(err) {
            console.log(err);
        });
    }

    componentWillMount() {
        this.getdata(this);
    }
    render() {
        return ( <
            >
            <
            div className = "container" >
            <
            BrowserRouter >
            <
            Switch >
            <
            Route path = "/"
            component = { Products }
            exact / >
            <
            Route path = "/product"
            component = { Products }
            exact / >
            <
            Route path = "/product/:id"
            component = { ProductDetail }
            exact / >
            <
            Route > page 404 < /Route> <
            /Switch> <
            /BrowserRouter> <
            /div>

            <
            />
        );
    }



}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setProduct: (content) => {
            dispatch(setProduct(content))
        }
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(App)