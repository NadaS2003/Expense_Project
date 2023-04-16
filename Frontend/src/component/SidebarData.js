import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/HomePage',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Expenses',
    path: '../ExpensePage',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Statistics',
    path: '../StatesPage',
    icon: <FaIcons.FaChartBar />,
    cName: 'nav-text'
  },
  {
    title: 'Detial',
    path: '../DetialPage',
    icon: <IoIcons.IoMdCodeDownload />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/Auth',
    icon: <FaIcons.FaDoorOpen />,
    cName: 'nav-text'
  },

];