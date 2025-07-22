import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const PrivateLayout = () => {
  return (
    <>
    PrivateLayout
    <Outlet/>
    </>
  )
}

export default PrivateLayout