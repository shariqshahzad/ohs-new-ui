import React from 'react';
import VisitTitle from './components/VisitTitle';
import VisitFilters from './components/VisitFilter';
import VisitList from './components/VisitList';

function VistListRequest() {
  return (
    <>
      <div className="page-title">
        <VisitTitle />
      </div>
      <div className="filters">
        <VisitFilters />
        <VisitList />
      </div>
    </>
  );
}

export default VistListRequest;
