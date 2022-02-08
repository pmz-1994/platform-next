const noDocument = { id: null }
const document = {
  id: 7308,
  parentId: 1690983,
  createdBy: {
    id: 12306,
    email: "paul@bimdata.io",
    firstname: "Paul",
    lastname: "Vilalta",
    createdAt: "2022-01-30T14:56:48.000Z",
    updatedAt: "2022-01-30T14:56:48.000Z",
    provider: "bimdataconnect",
    sub: "25b042b7-71ca-4669-88a5-672df93da911"
  },
  creator: {
    id: 12306,
    email: "paul@bimdata.io",
    firstname: "Paul",
    lastname: "Vilalta",
    createdAt: "2022-01-30T14:56:48.000Z",
    updatedAt: "2022-01-30T14:56:48.000Z",
    provider: "bimdataconnect",
    sub: "25b042b7-71ca-4669-88a5-672df93da911"
  },
  type: "Ifc",
  name: "19 rue Marc Antoine Petit",
  createdAt: "2022-01-30T14:56:51.000Z",
  updatedAt: "2022-01-30T15:48:07.000Z",
  fileName: "19 rue Marc Antoine Petit.ifc",
  size: 29255230,
  ifcId: 2981,
  file: "https://storage.gra.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a71d56f84ce25102/bimdata-staging/cloud_1247/project_45341/organization/demo/19_rue_Marc_Antoine_Petit.ifc?temp_url_sig=07566f6ec45c393d13e1228a8918b203206c971a&temp_url_expires=1644256958",
  defaultPermission: 1,
  userPermission: 100,
  children: []
};
const visasLoading = false
const project = {
  id: 45341,
  name: "visa tour",
  cloud: {
    id: 1247,
    name: "Paul Vilalta",
    features: [],
    marketplaceApps: [],
    organization: {
      id: 12062,
      name: "Paul Vilalta",
      isPersonnal: true,
      createdAt: "2022-01-30T14:56:48.000Z",
      updatedAt: "2022-01-30T14:56:48.000Z"
    },
    creator: {
      id: 12306,
      email: "paul@bimdata.io",
      firstname: "Paul",
      lastname: "Vilalta",
      createdAt: "2022-01-30T14:56:48.000Z",
      updatedAt: "2022-01-30T14:56:48.000Z",
      provider: "bimdataconnect",
      sub: "25b042b7-71ca-4669-88a5-672df93da911"
    },
    isDefault: false,
    createdAt: "2022-01-30T14:56:48.000Z",
    image:
      "https://storage.gra.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a71d56f84ce25102/bimdata-staging/cloud_1247/demo_icon.png?temp_url_sig=327021a4ba88a9a32b6e7202e43af065a74a94d9&temp_url_expires=1644255993",
    updatedAt: "2022-01-31T10:19:21.000Z"
  },
  status: "A",
  createdAt: "2022-01-30T14:56:51.000Z",
  updatedAt: "2022-01-31T10:19:21.000Z",
  rootFolderId: 1690980,
  isAdmin: true,
  isUser: false,
  isGuest: false,
  projectStatus: "inactive"
};
const createdVisas = [
  {
    id: 7,
    validations: [
      {
        id: 12,
        visaId: 7,
        validator: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        status: "P",
        hasCommented: false,
        createdAt: "2022-02-02T13:39:26.000Z",
        updatedAt: "2022-02-02T13:39:26.000Z"
      }
    ],
    validationsInError: [],
    creator: {
      id: 32236682,
      userId: 12306,
      email: "paul@bimdata.io",
      firstname: "Paul",
      lastname: "Vilalta",
      role: 100
    },
    status: "O",
    description: "gete",
    document: {
      id: 7308,
      parent: 1690983,
      parentId: 1690983,
      creator: 12306,
      project: 45341,
      name: "19 rue Marc Antoine Petit",
      fileName: "19 rue Marc Antoine Petit.ifc",
      file: "https://storage.gra.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a71d56f84ce25102/bimdata-staging/cloud_1247/project_45341/organization/demo/19_rue_Marc_Antoine_Petit.ifc?temp_url_sig=70b7e53935dcf028de729763c5588c85da23c5c1&temp_url_expires=1644256691",
      size: 29255230,
      createdAt: "2022-01-30T14:56:51.000Z",
      updatedAt: "2022-01-30T15:48:07.000Z",
      ifcId: 2981,
      userPermission: 100
    },
    comments: [
      {
        id: 25,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 7,
        content: "ok",
        createdAt: "2022-02-07T08:27:47.000Z",
        updatedAt: "2022-02-07T08:27:47.000Z"
      }
    ],
    deadline: "2029-12-21T00:00:00.000Z",
    createdAt: "2022-02-02T13:39:26.000Z",
    updatedAt: "2022-02-07T08:28:24.000Z"
  },
  {
    id: 6,
    validations: [
      {
        id: 11,
        visaId: 6,
        validator: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        status: "P",
        hasCommented: false,
        createdAt: "2022-02-02T10:19:06.000Z",
        updatedAt: "2022-02-02T10:19:06.000Z"
      }
    ],
    validationsInError: [],
    creator: {
      id: 32236682,
      userId: 12306,
      email: "paul@bimdata.io",
      firstname: "Paul",
      lastname: "Vilalta",
      role: 100
    },
    status: "O",
    description: "",
    document: {
      id: 7308,
      parent: 1690983,
      parentId: 1690983,
      creator: 12306,
      project: 45341,
      name: "19 rue Marc Antoine Petit",
      fileName: "19 rue Marc Antoine Petit.ifc",
      file: "https://storage.gra.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a71d56f84ce25102/bimdata-staging/cloud_1247/project_45341/organization/demo/19_rue_Marc_Antoine_Petit.ifc?temp_url_sig=70b7e53935dcf028de729763c5588c85da23c5c1&temp_url_expires=1644256691",
      size: 29255230,
      createdAt: "2022-01-30T14:56:51.000Z",
      updatedAt: "2022-01-30T15:48:07.000Z",
      ifcId: 2981,
      userPermission: 100
    },
    comments: [
      {
        id: 24,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 6,
        content: "dz",
        createdAt: "2022-02-07T08:27:15.000Z",
        updatedAt: "2022-02-07T08:27:15.000Z"
      }
    ],
    deadline: "2029-12-21T00:00:00.000Z",
    createdAt: "2022-02-02T10:19:06.000Z",
    updatedAt: "2022-02-02T10:19:06.000Z"
  },
  {
    id: 5,
    validations: [
      {
        id: 10,
        visaId: 5,
        validator: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        status: "P",
        hasCommented: true,
        createdAt: "2022-02-01T10:39:43.000Z",
        updatedAt: "2022-02-01T16:30:15.000Z"
      }
    ],
    validationsInError: [],
    creator: {
      id: 32236682,
      userId: 12306,
      email: "paul@bimdata.io",
      firstname: "Paul",
      lastname: "Vilalta",
      role: 100
    },
    status: "O",
    description: "idzd",
    document: {
      id: 7308,
      parent: 1690983,
      parentId: 1690983,
      creator: 12306,
      project: 45341,
      name: "19 rue Marc Antoine Petit",
      fileName: "19 rue Marc Antoine Petit.ifc",
      file: "https://storage.gra.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a71d56f84ce25102/bimdata-staging/cloud_1247/project_45341/organization/demo/19_rue_Marc_Antoine_Petit.ifc?temp_url_sig=70b7e53935dcf028de729763c5588c85da23c5c1&temp_url_expires=1644256691",
      size: 29255230,
      createdAt: "2022-01-30T14:56:51.000Z",
      updatedAt: "2022-01-30T15:48:07.000Z",
      ifcId: 2981,
      userPermission: 100
    },
    comments: [
      {
        id: 11,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "dzd",
        createdAt: "2022-02-01T16:10:56.000Z",
        updatedAt: "2022-02-01T16:10:56.000Z"
      },
      {
        id: 15,
        author: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        visaId: 5,
        content: "dzdz",
        createdAt: "2022-02-01T16:21:05.000Z",
        updatedAt: "2022-02-01T16:21:05.000Z"
      },
      {
        id: 16,
        author: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        visaId: 5,
        content: "dzdz",
        createdAt: "2022-02-01T16:21:18.000Z",
        updatedAt: "2022-02-01T16:21:18.000Z"
      },
      {
        id: 17,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "dz",
        createdAt: "2022-02-01T17:16:02.000Z",
        updatedAt: "2022-02-01T17:16:02.000Z"
      },
      {
        id: 20,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "fezdz",
        replyToCommentId: 17,
        createdAt: "2022-02-02T08:22:22.000Z",
        updatedAt: "2022-02-02T08:26:09.000Z"
      },
      {
        id: 22,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "dz",
        replyToCommentId: 17,
        createdAt: "2022-02-02T08:48:56.000Z",
        updatedAt: "2022-02-02T08:48:56.000Z"
      },
      {
        id: 23,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "hey",
        createdAt: "2022-02-02T08:51:25.000Z",
        updatedAt: "2022-02-02T08:51:25.000Z"
      }
    ],
    deadline: "2929-12-21T00:00:00.000Z",
    createdAt: "2022-01-31T13:39:53.000Z",
    updatedAt: "2022-02-01T10:42:24.000Z"
  }
];
const toValidateVisas =  [
  {
    id: 7,
    validations: [
      {
        id: 12,
        visaId: 7,
        validator: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        status: "P",
        hasCommented: false,
        createdAt: "2022-02-02T13:39:26.000Z",
        updatedAt: "2022-02-02T13:39:26.000Z"
      }
    ],
    validationsInError: [],
    creator: {
      id: 32236682,
      userId: 12306,
      email: "paul@bimdata.io",
      firstname: "Paul",
      lastname: "Vilalta",
      role: 100
    },
    status: "O",
    description: "gete",
    document: {
      id: 7308,
      parent: 1690983,
      parentId: 1690983,
      creator: 12306,
      project: 45341,
      name: "19 rue Marc Antoine Petit",
      fileName: "19 rue Marc Antoine Petit.ifc",
      file: "https://storage.gra.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a7…ab8e362b735755e1895c95de8acaaed7&temp_url_expires=1644256806",
      size: 29255230,
      createdAt: "2022-01-30T14:56:51.000Z",
      updatedAt: "2022-01-30T15:48:07.000Z",
      ifcId: 2981,
      userPermission: 100
    },
    comments: [
      {
        id: 25,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 7,
        content: "ok",
        createdAt: "2022-02-07T08:27:47.000Z",
        updatedAt: "2022-02-07T08:27:47.000Z"
      }
    ],
    deadline: "2029-12-21T00:00:00.000Z",
    createdAt: "2022-02-02T13:39:26.000Z",
    updatedAt: "2022-02-07T08:28:24.000Z"
  },
  {
    id: 6,
    validations: [
      {
        id: 11,
        visaId: 6,
        validator: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        status: "P",
        hasCommented: false,
        createdAt: "2022-02-02T10:19:06.000Z",
        updatedAt: "2022-02-02T10:19:06.000Z"
      }
    ],
    validationsInError: [],
    creator: {
      id: 32236682,
      userId: 12306,
      email: "paul@bimdata.io",
      firstname: "Paul",
      lastname: "Vilalta",
      role: 100
    },
    status: "O",
    description: "",
    document: {
      id: 7308,
      parent: 1690983,
      parentId: 1690983,
      creator: 12306,
      project: 45341,
      name: "19 rue Marc Antoine Petit",
      fileName: "19 rue Marc Antoine Petit.ifc",
      file: "https://storage.gra.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a7…ab8e362b735755e1895c95de8acaaed7&temp_url_expires=1644256806",
      size: 29255230,
      createdAt: "2022-01-30T14:56:51.000Z",
      updatedAt: "2022-01-30T15:48:07.000Z",
      ifcId: 2981,
      userPermission: 100
    },
    comments: [
      {
        id: 24,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 6,
        content: "dz",
        createdAt: "2022-02-07T08:27:15.000Z",
        updatedAt: "2022-02-07T08:27:15.000Z"
      }
    ],
    deadline: "2029-12-21T00:00:00.000Z",
    createdAt: "2022-02-02T10:19:06.000Z",
    updatedAt: "2022-02-02T10:19:06.000Z"
  },
  {
    id: 5,
    validations: [
      {
        id: 10,
        visaId: 5,
        validator: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        status: "P",
        hasCommented: true,
        createdAt: "2022-02-01T10:39:43.000Z",
        updatedAt: "2022-02-01T16:30:15.000Z"
      }
    ],
    validationsInError: [],
    creator: {
      id: 32236682,
      userId: 12306,
      email: "paul@bimdata.io",
      firstname: "Paul",
      lastname: "Vilalta",
      role: 100
    },
    status: "O",
    description: "idzd",
    document: {
      id: 7308,
      parent: 1690983,
      parentId: 1690983,
      creator: 12306,
      project: 45341,
      name: "19 rue Marc Antoine Petit",
      fileName: "19 rue Marc Antoine Petit.ifc",
      file: "https://storage.gra.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a7…ab8e362b735755e1895c95de8acaaed7&temp_url_expires=1644256806",
      size: 29255230,
      createdAt: "2022-01-30T14:56:51.000Z",
      updatedAt: "2022-01-30T15:48:07.000Z",
      ifcId: 2981,
      userPermission: 100
    },
    comments: [
      {
        id: 11,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "dzd",
        createdAt: "2022-02-01T16:10:56.000Z",
        updatedAt: "2022-02-01T16:10:56.000Z"
      },
      {
        id: 15,
        author: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        visaId: 5,
        content: "dzdz",
        createdAt: "2022-02-01T16:21:05.000Z",
        updatedAt: "2022-02-01T16:21:05.000Z"
      },
      {
        id: 16,
        author: {
          id: 32236689,
          userId: 12307,
          email: "x2cheese@gmail.com",
          firstname: "Miles",
          lastname: "Davis",
          role: 100
        },
        visaId: 5,
        content: "dzdz",
        createdAt: "2022-02-01T16:21:18.000Z",
        updatedAt: "2022-02-01T16:21:18.000Z"
      },
      {
        id: 17,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "dz",
        createdAt: "2022-02-01T17:16:02.000Z",
        updatedAt: "2022-02-01T17:16:02.000Z"
      },
      {
        id: 20,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "fezdz",
        replyToCommentId: 17,
        createdAt: "2022-02-02T08:22:22.000Z",
        updatedAt: "2022-02-02T08:26:09.000Z"
      },
      {
        id: 22,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "dz",
        replyToCommentId: 17,
        createdAt: "2022-02-02T08:48:56.000Z",
        updatedAt: "2022-02-02T08:48:56.000Z"
      },
      {
        id: 23,
        author: {
          id: 32236682,
          userId: 12306,
          email: "paul@bimdata.io",
          firstname: "Paul",
          lastname: "Vilalta",
          role: 100
        },
        visaId: 5,
        content: "hey",
        createdAt: "2022-02-02T08:51:25.000Z",
        updatedAt: "2022-02-02T08:51:25.000Z"
      }
    ],
    deadline: "2929-12-21T00:00:00.000Z",
    createdAt: "2022-01-31T13:39:53.000Z",
    updatedAt: "2022-02-01T10:42:24.000Z"
  }
];

export { noDocument, document, visasLoading, project, createdVisas, toValidateVisas }