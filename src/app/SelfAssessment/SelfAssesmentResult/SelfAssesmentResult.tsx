import React, { useEffect, useState } from "react";
import { Button, Icon } from "@takamol/qiwa-design-system/components";
import { Checkmark, Close } from "@takamol/qiwa-design-system/icons";
import { Link as RouterLink } from 'react-router-dom'

export const SelfAssessmentResult = () => {
    const [percentage, setPercentage] = useState<any>()
    useEffect(() => {
        setPercentage(60)
    }, [])
    return percentage != undefined && percentage >= 50 ? (
        <div className='myContainer container'>
            <div className="myContainer row-2 row ">
                <div className="innerContainer result-items">
                    <Icon
                        iconComponent={Checkmark}
                        size={32}
                        padding={6}
                        borderWidth={2}
                    />
                    <p className="result-p">RESULT</p>
                    <h6 className="result-per">You have scored {percentage}%</h6>
                    <p className="result-para">You have successfully submitted the Assessment and your request has been sent to Audit Review</p>
                    <center>

                        <Button size="large"
                            component={RouterLink}
                            to="/start-self-assessment"
                        >
                            GO back
                        </Button>
                    </center>
                </div>
            </div>
        </div>
    ) : (
        <>
            <div className='myContainer container'>
                <div className="myContainer row-2 row ">
                    <div className="innerContainer result-items">
                        <Icon
                            iconComponent={Close}
                            size={32}
                            padding={6}
                            borderWidth={2}
                            color="danger_500"
                        />
                        <p className="result-p">RESULT</p>
                        <h6 className="result-per">You have scored {percentage}%</h6>
                        <p className="result-para">You have not passed the Self Assessment</p>
                        <center>

                            <Button size="large" component={RouterLink}
                                to="/start-self-assessment"
                            >
                                Retry
                            </Button>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

