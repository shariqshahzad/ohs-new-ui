
import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Icon } from '@takamol/qiwa-design-system/components';
import { Arrow, Document } from '@takamol/qiwa-design-system/icons';

const PCRequestDetail = () => {
    return (

        <>
            <div className='myContainer container'>
                <div className="myContainer row-2 row ">
                    <div className="innerContainer">
                        <div className="col">
                            <div className="innertext">
                                <h1 className='Heading-h1'>OHS Certificate Request Details</h1>
                            </div>
                            <div>
                                {/* <a href="/ohs-certificate-requests"> */}

                                <Button
                                    ariaLabel="Next step"
                                    iconComponent={Arrow}
                                    iconPlacement="start"
                                    iconRotation={180}
                                    component={RouterLink}
                                    to="/ohs-certificate-requests"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myContainer row-2 row ">
                    <div className="innerContainer">
                        <div className="col">
                            <div className="innertext">
                                <Icon
                                    color='business_500'
                                    iconComponent={Document}
                                    padding={10}
                                    borderWidth={2}
                                    radiusVariant="rounded"
                                    size={24}
                                />
                                <h1 className='h1 Heading-h1'>Request Details</h1>
                            </div>
                            <div>
                                <Button size="small">
                                    Compare Assesment
                                </Button>
                            </div>
                        </div>
                        <hr />
                        <div className="define-contents">

                            <p className='p'>Establishment Number</p>
                            <h6 className='h6'>Establishment Number</h6>
                            <p className='p'>Establishment Name</p>
                            <h6 className='h6'>Establishment Name</h6>
                            <p className='p'>Request Date</p>
                            <h6 className='h6'>Request Date</h6>
                            <p className='p'>Assign To</p>
                            <h6 className='h6'>Assign To</h6>
                            <p className='p'>Status</p>
                            <h6 className='h6'>Status</h6>
                        </div>
                    </div>
                </div>

                <div className="myContainer row-2 row ">
                    <div className="innerContainer">
                        <div className="col">
                            <div className="innertext">
                                <Icon
                                    color='business_500'
                                    iconComponent={Document}
                                    padding={10}
                                    borderWidth={2}
                                    radiusVariant="rounded"
                                    size={24}
                                />
                                <h1 className='h1 Heading-h1'>Scorings</h1>
                            </div>

                        </div>
                        <hr />
                        <div className="define-contents">

                            <p className='p'>Establishment Score</p>
                            <h6 className='h6'>EstablishmentScore%</h6>
                            <p className='p'>Auditor score</p>
                            <h6 className='h6'>Auditorscore</h6>
                            <p className='p'>Inspector score</p>
                            <h6 className='h6'>Inspectorscore</h6>
                            <p className='p'>Supervisor Score</p>
                            <h6 className='h6'>SUPERVISORSCORE</h6>

                        </div>
                    </div>
                </div>

                <div className="myContainer row-2 row ">
                    <div className="innerContainer">
                        <div className="col">
                            <div className="innertext">
                                <Icon
                                    color='business_500'
                                    iconComponent={Document}
                                    padding={10}
                                    borderWidth={2}
                                    radiusVariant="rounded"
                                    size={24}
                                />
                                <h1 className='h1 Heading-h1'>Audit Details</h1>
                            </div>

                        </div>
                        <hr />
                        <div className="define-contents">

                            <p className='p'>Safety Specialist - Inspector</p>
                            <h6 className='h6'>SafetySpecialistInspector</h6>
                            <p className='p'>Submission Date</p>
                            <h6 className='h6'>Submission Date</h6>
                            <p className='p'>Inspector Comments</p>
                            <h6 className='h6'>Inspector Comments</h6>

                        </div>
                    </div>
                </div>

                <div className="myContainer row-2 row ">
                    <div className="innerContainer">
                        <div className="col">
                            <div className="innertext">
                                <Icon
                                    color='business_500'
                                    iconComponent={Document}
                                    padding={10}
                                    borderWidth={2}
                                    radiusVariant="rounded"
                                    size={24}
                                />
                                <h1 className='h1 Heading-h1'>Inspection Details</h1>
                            </div>

                        </div>
                        <hr />
                        <div className="define-contents">

                            <p className='p'>Safety Specialist - Inspector</p>
                            <h6 className='h6'>SafetySpecialistInspector</h6>
                            <p className='p'>Submission Date</p>
                            <h6 className='h6'>Submission Date</h6>
                            <p className='p'>Inspector Comments</p>
                            <h6 className='h6'>Inspector Comments</h6>

                        </div>
                    </div>
                </div>
                <div className="myContainer row-2 row ">
                    <div className="innerContainer">
                        <div className="col">
                            <div className="innertext">
                                <Icon
                                    color='business_500'
                                    iconComponent={Document}
                                    padding={10}
                                    borderWidth={2}
                                    radiusVariant="rounded"
                                    size={24}
                                />
                                <h1 className='h1 Heading-h1'>Supervision Details</h1>
                            </div>

                        </div>
                        <hr />
                        <div className="define-contents">

                            <p className='p'>Submission Date</p>
                            <h6 className='h6'>SubmissionDate</h6>
                            <p className='p'>Supervisor Comments</p>
                            <h6 className='h6'>SupervisorComments</h6>

                        </div>
                    </div>
                </div>
            </div >
        </>

    );
}

export default PCRequestDetail