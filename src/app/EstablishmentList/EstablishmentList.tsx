import React from "react";
import ESTTitle from "./components/EstTitle";
import ESTList from "./components/ESTList";
import ESFilters from "./components/ESTFilter";


function EstablishmentList() {

    return (
        <>
            <div className="page-title">
                <ESTTitle></ESTTitle>
            </div>
            <div className="filters">
                <ESFilters />
                <ESTList ></ESTList>
            </div>
        </>
    );
}

export default EstablishmentList