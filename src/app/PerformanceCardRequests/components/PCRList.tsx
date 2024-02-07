import { Actions, ActionsMenu, IconButton, Table } from '@takamol/qiwa-design-system/components';
import { Eye } from '@takamol/qiwa-design-system/icons';
import React from 'react';
import { getRandomPCRData } from '../data/pcRequestList';
import { QiwaTable } from 'src/app/Components/Table';

const PCRList = ({ openDialogBox }: any) => {
  const columns = ['Establishment Name', 'Score', 'Date Assigned', 'Date Issued', 'Assigned To', 'Status'];

  const data: any[] = getRandomPCRData();
  const onAssignSpecialist = (pcr: any) => {
    openDialogBox(pcr);
  };
  return <QiwaTable columns={columns} />;
};

export default PCRList;
