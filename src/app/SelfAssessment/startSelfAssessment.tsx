import { Button } from '@takamol/qiwa-design-system/components';
import React from 'react';
export const StartSelfAssesment = () => {
  return (
    <div className="myContainer container">
      <div className="myContainer row-2 row ">
        <div className="innerContainer result-items">
          <h1 className="assesment-h1">Fill your Self Assessment.</h1>
          <p className="heading-p">
            Please prepare all the important documents that you want to attach to your answer(s).
          </p>

          <Button size="large" onClick={() => {}} className="assesment-button">
            Start The Self Assesment
          </Button>
        </div>
      </div>
    </div>
  );
};
