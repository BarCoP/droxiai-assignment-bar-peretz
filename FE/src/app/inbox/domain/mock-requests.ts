// added this file in order to set layout of components before BE is ready

export interface InboxRequestItem {
  type: 'renewal' | 'freeText' | 'labReport';
  id: string;
  status: string;
  isRead: boolean;
  patientName: string;
  requestDate: string;
  lastModifiedDate: string;
  description: string;
  estimatedTimeSec: number;
  assignment: {
    assignDate: string;
    assignedTo: string;
    grouping?: string;
  };
  isUrgent: boolean;
  prescriptionIds?: string[];
  recommendation?: {
    recommendationValue: string;
    recommendationDescription: string;
  };
  labels?: string[];
  abnormalResults?: any[];
  panels?: string[];
}


export const demoRequest: InboxRequestItem[] = [
  {
    type: 'renewal',
    id: '1',
    status: 'new',
    isRead: false,
    patientName: 'John Smith',
    requestDate: '2025-06-08T00:00:00.000Z',
    lastModifiedDate: '2025-06-08T11:01:47.567Z',
    description: '[06/08/25] refull; [12/12/24] refill for me',
    estimatedTimeSec: 151,
    assignment: {
      assignDate: '2025-06-08T11:01:47.567Z',
      assignedTo: 'Dr. Johnson',
      grouping: 'DEFAULT_GROUPING',
    },
    isUrgent: false,
    prescriptionIds: [],
    recommendation: {
      recommendationValue: 'unknown',
      recommendationDescription: 'System has low recommendation confidence.',
    },
  },
  {
    type: 'freeText',
    id: '2',
    status: 'new',
    isRead: true,
    patientName: 'Mary Davis',
    requestDate: '2025-06-08T00:00:00.000Z',
    lastModifiedDate: '2025-06-08T09:41:33.619Z',
    description: '[06/08/25] response earlier',
    estimatedTimeSec: 167,
    assignment: {
      assignDate: '2025-06-08T09:41:33.619Z',
      assignedTo: 'Dr. Johnson',
    },
    isUrgent: false,
    labels: ['Rx'],
  },
  {
    type: 'labReport',
    id: '3',
    status: 'new',
    isRead: true,
    patientName: 'Marina Green',
    requestDate: '2025-06-05T00:00:00.000Z',
    lastModifiedDate: '2025-06-05T14:03:19.000Z',
    description: '2 lab reports',
    estimatedTimeSec: 60,
    assignment: {
      assignDate: '2025-06-05T13:32:35.989Z',
      assignedTo: 'Dr. Johnson',
      grouping: 'DEFAULT_GROUPING',
    },
    isUrgent: false,
    abnormalResults: [],
    panels: ['CBC w/ auto diff', 'CBC w/ auto diff'],
  },
  {
    type: 'freeText',
    id: '4',
    status: 'new',
    isRead: true,
    patientName: 'Silver Cat',
    requestDate: '2025-06-05T00:00:00.000Z',
    lastModifiedDate: '2025-06-05T13:31:30.000Z',
    description: '[06/05/25] ref;\n[05/26/25] Sanity refill;\n[05/22/25] i need a refill ASAP',
    estimatedTimeSec: 1863,
    assignment: {
      assignDate: '2025-05-26T13:31:51.298Z',
      assignedTo: 'Dr. Johnson',
      grouping: 'DEFAULT_GROUPING',
    },
    isUrgent: false,
    prescriptionIds: [],
    recommendation: {
      recommendationValue: 'unknown',
      recommendationDescription: 'System has low recommendation confidence.',
    },
  },
  {
    type: 'labReport',
    id: '5',
    status: 'new',
    isRead: true,
    patientName: 'Maiya Olson',
    requestDate: '2025-05-27T00:00:00.000Z',
    lastModifiedDate: '2025-05-27T11:37:28.000Z',
    description: '2 lab reports',
    estimatedTimeSec: 60,
    assignment: {
      assignDate: '2025-05-26T08:48:28.149Z',
      assignedTo: 'Dr. Johnson',
      grouping: 'DEFAULT_GROUPING',
    },
    isUrgent: false,
    abnormalResults: [],
    panels: ['HbA1c (hemoglobin A1c), blood', 'HbA1c (hemoglobin A1c), blood'],
  },

  {
    type: 'freeText',
    id: '6',
    status: 'new',
    isRead: true,
    patientName: 'Brando Goods',
    requestDate: '2025-05-22T00:00:00.000Z',
    lastModifiedDate: '2025-05-22T13:41:21.528Z',
    description: '[05/22/25] refill',
    estimatedTimeSec: 58,
    assignment: {
      assignDate: '2025-05-22T13:41:21.528Z',
      assignedTo: 'Dr. Johnson',
      grouping: 'DEFAULT_GROUPING',
    },
    isUrgent: false,
    prescriptionIds: ['a-1959307.historicalmedrequest-12782'],
    recommendation: {
      recommendationValue: 'unknown',
      recommendationDescription: 'System has low recommendation confidence.',
    },
  },
  {
    type: 'freeText',
    id: '7',
    status: 'new',
    isRead: true,
    patientName: 'Marcia Henderson',
    requestDate: '2025-05-22T00:00:00.000Z',
    lastModifiedDate: '2025-05-22T12:41:19.942Z',
    description: '[05/22/25] devices',
    estimatedTimeSec: 139,
    assignment: {
      assignDate: '2025-05-22T12:41:19.942Z',
      assignedTo: 'Dr. Johnson',
      grouping: 'DEFAULT_GROUPING',
    },
    isUrgent: false,
    prescriptionIds: [],
    recommendation: {
      recommendationValue: 'unknown',
      recommendationDescription: 'System has low recommendation confidence.',
    },
  },
  {
    type: 'freeText',
    id: '8',
    status: 'new',
    isRead: true,
    patientName: 'Dawson Walker',
    requestDate: '2025-05-21T00:00:00.000Z',
    lastModifiedDate: '2025-05-22T05:22:45.541Z',
    description: '[05/21/25] Question Regarding Ongoing Issue – Requesting Review',
    estimatedTimeSec: 74,
    assignment: {
      assignDate: '2025-05-22T05:22:45.541Z',
      assignedTo: 'Dr. Johnson',
    },
    isUrgent: false,
    labels: [],
  },
  {
    type: 'freeText',
    id: '9',
    status: 'new',
    isRead: true,
    patientName: 'Rodrick Harris',
    requestDate: '2025-05-21T00:00:00.000Z',
    lastModifiedDate: '2025-05-21T14:12:55.226Z',
    description: '[05/21/25] Request for New Prescription',
    estimatedTimeSec: 262,
    assignment: {
      assignDate: '2025-05-21T14:12:55.226Z',
      assignedTo: 'Dr. Johnson',
    },
    isUrgent: false,
    labels: ['Sx', 'Rx', 'Clinical'],
  },
  {
    type: 'freeText',
    id: '10',
    status: 'new',
    isRead: true,
    patientName: 'Aria Hudson',
    requestDate: '2025-05-21T00:00:00.000Z',
    lastModifiedDate: '2025-05-21T13:56:23.324Z',
    description: '[05/21/25] Follow-up on Recent Appointment',
    estimatedTimeSec: 208,
    assignment: {
      assignDate: '2025-05-21T13:56:23.324Z',
      assignedTo: 'Dr. Johnson',
    },
    isUrgent: false,
    labels: ['Scheduling', 'Clinical'],
  },
];
