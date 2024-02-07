import React from 'react';
import { Table, Box, Icon, Text, Actions, ActionsMenu, IconButton } from '@takamol/qiwa-design-system/components';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import { Eye, Search } from '@takamol/qiwa-design-system/icons';
import { getRandomPCRData } from '../PerformanceCardRequests/data/pcRequestList';

export const QiwaTable = ({ columns }: any) => {
  const data: any[] = getRandomPCRData();

  const { isMobileWidth } = useWindowUtils();
  const isEmpty = true;

  return (
    <Table hasCheckboxesOrRadio={false}>
      <Table.Head>
        <Table.Row>
          {columns && columns.map((columnName: any) => <Table.HeadCell key={columnName}>{columnName}</Table.HeadCell>)}
          <Table.HeadCell alignCenter>Actions</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map((pcr, index) => (
          <Table.Row key={index}>
            <Table.Cell>{pcr.establishmentName}</Table.Cell>
            <Table.Cell>{pcr.score}</Table.Cell>
            <Table.Cell>{pcr.dateAssigned.toString()}</Table.Cell>
            <Table.Cell>{pcr.dateIssued.toString()}</Table.Cell>
            <Table.Cell>{pcr.assignedTo}</Table.Cell>
            <Table.Cell>{pcr.status}</Table.Cell>
            <Table.Cell alignCenter>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Actions ariaLabel={`Actions for ${pcr.establishmentName}`} variant="individuals">
                  <ActionsMenu>
                    <ActionsMenu.Item>Assign Specialist</ActionsMenu.Item>
                  </ActionsMenu>
                </Actions>
                <div style={{ alignSelf: 'center' }}>
                  <IconButton variant="business" iconComponent={Eye} />
                </div>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
