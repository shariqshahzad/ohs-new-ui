import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { PrivateRoute, ErrorPage } from '@takamol/react-qiwa-core';
import { AuthRoute } from '../../enums/AuthRoute.enum';
import { CoreRoute } from '../../enums/CoreRoute.enum';
import { Layout } from 'src/app/shared/components/Layout';
import { EstablishmentContainer } from 'src/app/pages/Establishment/EstablishmentContainer';
import { Question } from 'src/app/pages/admin/Question';
import ExampleDashboard from 'src/app/exampleDashboard/ExampleDashboard';
import PerformanceCardRequests from 'src/app/PerformanceCardRequests/PCRContainer';
import PCRequestDetail from 'src/app/PerformanceCardDetails/PerformanceCardDetails';
import PerformanceCertificate from 'src/app/PerformanceCertificates/PerformanceCertificates';
import EstablishmentList from 'src/app/EstablishmentList/EstablishmentList';
import VistListRequest from 'src/app/Visits/VisitListRequest';
import { StartSelfAssesment } from 'src/app/SelfAssessment/startSelfAssessment';
import { SelfAssessmentResult } from 'src/app/SelfAssessment/SelfAssesmentResult/SelfAssesmentResult';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <Layout>
            <PrivateRoute>
              <Outlet />
            </PrivateRoute>
          </Layout>
        }
      >
        <Route path={AuthRoute.dashboard} element={<EstablishmentContainer />} />
        <Route path={AuthRoute.questions} element={<Question />} />
        <Route path={AuthRoute.oshcertificate} element={<PerformanceCardRequests></PerformanceCardRequests>} />
        <Route path={AuthRoute.performanceCardDetail} element={<PCRequestDetail />} />
        <Route path={AuthRoute.PreviewPerformanceCardCertificate} element={<PerformanceCertificate />} />
        <Route path={AuthRoute.EstablishmentList} element={<EstablishmentList />} />
        <Route path={AuthRoute.VistListRequest} element={<VistListRequest />} />
        <Route path={AuthRoute.startSelfAssessment} element={<StartSelfAssesment />} />
        <Route path={AuthRoute.SelfAssessmentResult} element={<SelfAssessmentResult />} />
      </Route>
      {/* <Route
          path={AuthRoute.OSHCERTIFICATE1}
          element={
            <Box pt={24} pb={16} gap={16} direction="row" align="center">
              <p>OHS page</p>
            </Box>
          }
        /> */}
      {/* </Route> */}
      {/* Error handling routes */}
      <Route path={CoreRoute.error} element={<ErrorPage errorType="error" />} />
      <Route path={CoreRoute.badGateway} element={<ErrorPage errorType="bad-gateway" />} />
      <Route path={CoreRoute.unavailable} element={<ErrorPage errorType="unavailable" />} />
      <Route path={CoreRoute.notVerified} element={<ErrorPage errorType="not-verified" />} />
      <Route path={CoreRoute.sessionExpiry} element={<ErrorPage errorType="session-expiry" />} />
      <Route path={CoreRoute.gatewayTimeout} element={<ErrorPage errorType="gateway-timeout" />} />
      <Route path="*" element={<ErrorPage errorType="not-found" />} />
    </Routes>
  );
};

export default AppRouter;
