import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';

import { useLocale } from '../../../../src/app/translations/hooks/useLocale';
import { PostRequestProxy } from '../../Components/Axios/axios';
// // import { GETUSERS } from 'src/utils/common/endpoint';
// import { userDataMock } from 'src/mocks/fixtures/authApi/user';

// import { UserColumn } from './MataColumn';
// import { AddUsersForm } from './AddUsersForm';
export const Users = () => {
  const [data, setData] = useState([]);
  async function getUser() {
    const result = await PostRequestProxy('GetAllUsers', null);
    if (result?.data?.GetAllUsers?.Header?.ResponseStatus?.Code == '000') {
      const tempUsers: any = [];
      {
        result?.data?.GetAllUsers?.Body.map((user: any) =>
          tempUsers.push({
            id: user.userId,
            name: user.firstName + ' ' + user.lastName,
            email: user.email,
            phone: user.phoneNumber,
            role: user.role?.role,
            action: null,
          }),
        );
      }
      setData(tempUsers);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {/* <AddUsersForm getUsers={getUser} />
      <Container className="table-container">
        <Datatable columns={UserColumn} data={data} />
      </Container> */}
    </div>
  );
};
