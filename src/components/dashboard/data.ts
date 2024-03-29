import { Wrench, FileCog, PackagePlus, PackageMinus } from 'lucide-react';

import {
  RentalTool,
  MissingItems,
  RestockItems,
  ToolsEquipmentAvailability,
  WorkOrderStatus,
} from './types';

export const RENTAL_TOOLS_DATA: RentalTool[] = [
  {
    order: 1,
    toolRef: 6465,
    member: {
      firstName: 'Alex',
      lastName: 'Noman',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      level: 1,
    },
    workStatus: 'completed',
    duration: 900000,
  },
  {
    order: 2,
    toolRef: 5665,
    member: {
      firstName: 'Razib',
      lastName: 'Rahman',
      profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      level: 2,
    },
    workStatus: 'inProgress',
    duration: 300000,
  },
  {
    order: 3,
    toolRef: 1755,
    member: {
      firstName: 'Luke',
      lastName: 'Norton',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      level: 3,
    },
    workStatus: 'notStarted',
    duration: 0,
  },
];

export const MISSING_ITEMS_DATA: MissingItems[] = [
  {
    toolRef: 6465,
    member: {
      firstName: 'Alex',
      lastName: 'Noman',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      level: 1,
    },
  },
  {
    toolRef: 6466,
    member: {
      firstName: 'Alex',
      lastName: 'Noman',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      level: 1,
    },
  },
  {
    toolRef: 6467,
    member: {
      firstName: 'Alex',
      lastName: 'Noman',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      level: 1,
    },
  },
];

export const RESTOCK_ITEMS_DATA: RestockItems[] = [
  {
    toolRef: 6465,
    toolOrEquipment: 'Screws',
    status: 'low',
  },
  {
    toolRef: 5665,
    toolOrEquipment: 'Wires (electrical)',
    status: 'none',
  },
  {
    toolRef: 1755,
    toolOrEquipment: 'Bolts',
    status: 'none',
  },
];

export const TOOLS_EQUIPMENT_AVAILABILITY_DATA: ToolsEquipmentAvailability[] = [
  {
    name: 'Rental Items',
    count: 500,
    total: 1000,
    icon: Wrench,
  },
  {
    name: 'Spare Parts',
    count: 750,
    total: 1000,
    icon: FileCog,
  },
];

export const RECEPTION_SUMMARY_DATA: ToolsEquipmentAvailability[] = [
  {
    name: 'Packaged Received',
    count: 10,
    icon: PackageMinus,
  },
  {
    name: 'Processed Packages',
    count: 5,
    icon: PackagePlus,
  },
];

export const WORK_ORDER_STATUS_DATA: WorkOrderStatus[] = [
  {
    name: 'Completed',
    count: 7,
  },
  {
    name: 'Work In Progress',
    count: 3,
  },
  {
    name: 'Due',
    count: 2,
  },
];
