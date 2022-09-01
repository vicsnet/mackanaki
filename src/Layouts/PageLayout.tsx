import React from "react";
// import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { PageLayoutPropTypes } from "./types";

const PageLayout = ({ children, paddingTop }: PageLayoutPropTypes) => {
    return (
        <>
            <Header />
            <div className={paddingTop ? paddingTop : "pt-24"}>
                {children}
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default PageLayout;
