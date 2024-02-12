'use client';

import { signOut } from 'next-auth/react';

import MainTagContainer from '../common/mainTag-container';
import WidthContainer from '../common/width-container';

import DashboardFilters from './components/DashboardFilters';
import DashboardHeading from './components/DashboardHeading';

import DashboardPagination from './components/DashboardPagination';
import Table from './components/DashboardTable';
import TableBody from './components/DashboardTable/TableBody';
import TableHead from './components/DashboardTable/TableHead';

const Dashboard = () => {
  return (
    <>
      <MainTagContainer>
        <WidthContainer>
          <DashboardHeading />
          <DashboardFilters />
          <Table>
            <TableHead />
            <TableBody />
          </Table>
          <DashboardPagination />
        </WidthContainer>
      </MainTagContainer>
      <p className="mt-36"></p>
      <button type="button" onClick={() => signOut()}>
        Sign out
      </button>
    </>
  );
};

export default Dashboard;