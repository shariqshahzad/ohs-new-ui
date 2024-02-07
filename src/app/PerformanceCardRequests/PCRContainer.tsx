import React, { useState } from "react";
import PCRAssignDialog from "./components/PCRAssignDialog";
import PCRFilters from "./components/PCRFitlers";
import PCRList from "./components/PCRList";
import PCRTitle from "./components/PCRTItle";
import { getRandomPCRData } from "./data/pcRequestList";

const PerformanceCardRequests = () => {
    const [ showAssignDialog,setShowAssignDialog ] = useState(false);
    const [dialogData , setDialogData] = useState(null);

    const openDialogBox = (data:any) => {
        setDialogData(data);
        setShowAssignDialog(true);
    }
    const closeDialogBox = ()=>{
        setDialogData(null);
        setShowAssignDialog(false); 
    }
    return (
        <>
            <div className="page-title">
                <PCRTitle></PCRTitle>
            </div>
            <div className="filters">
                <PCRFilters />
                <PCRList openDialogBox={openDialogBox}></PCRList>
                <PCRAssignDialog closeDialogBox={closeDialogBox} isOpen={showAssignDialog} data={dialogData}></PCRAssignDialog>
            </div>
        </>
    )

}

export default PerformanceCardRequests;