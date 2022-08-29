import React from "react";
// import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { PageLayoutPropTypes } from "./types";

const PageLayout = ({ children }: PageLayoutPropTypes) => {
    return (
        <>
            <Header />
            <div className="pt-24">

                {children}
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default PageLayout;
