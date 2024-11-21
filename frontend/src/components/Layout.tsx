import React from "react";
import { Outlet } from "react-router";
import Homebar from "../components/HomeBar";
import Footer from "./Footer";


export default class Layout extends React.Component {
    public render() {
        return (
            <>
                <Homebar/>
                <div className="content">
                    <Outlet/>
                </div>
                <Footer/>
            </>
        )
    }
}