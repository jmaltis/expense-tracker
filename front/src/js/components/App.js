import React from "react";
import Header from "./Header";

export default ({children}) => (
    <div id="main">
        <Header/>
        {children}
    </div>
)