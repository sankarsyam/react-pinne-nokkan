export default [
  {
    isActive: true,
    _id: '5955f553d5295e0fd49478f9',
    action: {
      _id: '5955f553d5295e0fd49478f8',
      name: 'Room Ready', //actions
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: 5, //settings
      textMessage: '', //settings
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true, //settings
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: [
        //staffTarget
        'bellhop',
        'frontDesk1',
      ],
    },
    name: 'Guest Arrival', //triggerName
    __v: 0,
    triggers: [
      {
        _id: '59561da73283ec2574c21660',
        type: 'location',
        subType: 'Likes Golff',
        location: {
          latitude: 8.9,
          longitude: 9.0,
        },
      },
    ],
  },
  {
    isActive: false,
    _id: '59561da73283ec2574c21662',
    action: {
      _id: '59561da73283ec2574c21661',
      name: 'Room Ready12',
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: null,
      textMessage: '',
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true,
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: ['bellhop', 'frontDesk2'],
    },
    name: 'Guest Arrival',
    __v: 0,
    triggers: [
      {
        _id: '59561da73283ec2574c2165f',
        type: 'check-in1',
        subType: '',
        action: {
          _id: '5955f553d5295e0fd49478f8',
          name: 'Room Ready',
          description: 'The Guest’s room was isready, please give keys',
          needsCompletionConfirmation: true,
          expiresInMinutes: 5,
          textMessage: '',
          scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
          isTriggerEvent: true,
          __v: 0,
          directives: ['Give guest a relaxed service'],
          actors: ['bellhop', 'frontDesk3'],
        },
        __v: 0,
      },
      {
        _id: '59561da73283ec2574c21660',
        type: 'profile',
        subType: 'Likes Golff',
        __v: 0,
      },
    ],
  },
  {
    isActive: true,
    _id: '5955f553d5295e0fd49478f9a',
    action: {
      _id: '5955f553d5295e0fd49478f8',
      name: 'Room Ready', //actions
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: 5, //settings
      textMessage: '', //settings
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true, //settings
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: [
        //staffTarget
        'bellhop',
        'frontDesk1',
      ],
    },
    name: 'Guest Arrival', //triggerName
    __v: 0,
    triggers: [],
  },
  {
    isActive: true,
    _id: '5955f553d5295e0fd49478f9w',
    action: {
      _id: '5955f553d5295e0fd49478f8',
      name: 'Room Ready', //actions
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: 5, //settings
      textMessage: '', //settings
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true, //settings
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: [
        //staffTarget
        'bellhop',
        'frontDesk1',
      ],
    },
    name: 'Guest Arrival', //triggerName
    __v: 0,
    triggers: [],
  },
  {
    isActive: true,
    _id: '5955f553d5295e0fd49478f9r',
    action: {
      _id: '5955f553d5295e0fd49478f8',
      name: 'Room Ready', //actions
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: 5, //settings
      textMessage: '', //settings
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true, //settings
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: [
        //staffTarget
        'bellhop',
        'frontDesk1',
      ],
    },
    name: 'Guest Arrival', //triggerName
    __v: 0,
    triggers: [],
  },
  {
    isActive: true,
    _id: '5955f553d5295e0fd49478f9t',
    action: {
      _id: '5955f553d5295e0fd49478f8',
      name: 'Room Ready', //actions
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: 5, //settings
      textMessage: '', //settings
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true, //settings
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: [
        //staffTarget
        'bellhop',
        'frontDesk1',
      ],
    },
    name: 'Guest Arrival', //triggerName
    __v: 0,
    triggers: [],
  },
  {
    isActive: true,
    _id: '5955f553d5295e0fd49478f9y',
    action: {
      _id: '5955f553d5295e0fd49478f8',
      name: 'Room Ready', //actions
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: 5, //settings
      textMessage: '', //settings
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true, //settings
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: [
        //staffTarget
        'bellhop',
        'frontDesk1',
      ],
    },
    name: 'Guest Arrival', //triggerName
    __v: 0,
    triggers: [],
  },
  {
    isActive: true,
    _id: '5955f553d5295e0fd49478f9u',
    action: {
      _id: '5955f553d5295e0fd49478f8',
      name: 'Room Ready', //actions
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: 5, //settings
      textMessage: '', //settings
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true, //settings
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: [
        //staffTarget
        'bellhop',
        'frontDesk1',
      ],
    },
    name: 'Guest Arrival', //triggerName
    __v: 0,
    triggers: [],
  },
  {
    isActive: true,
    _id: '5955f553d5295e0fd49478f9o',
    action: {
      _id: '5955f553d5295e0fd49478f8',
      name: 'Room Ready', //actions
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: 5, //settings
      textMessage: '', //settings
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true, //settings
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: [
        //staffTarget
        'bellhop',
        'frontDesk1',
      ],
    },
    name: 'Guest Arrival', //triggerName
    __v: 0,
    triggers: [],
  },
  {
    isActive: true,
    _id: '5955f553d5295e0fd49478f9p',
    action: {
      _id: '5955f553d5295e0fd49478f8',
      name: 'Room Ready', //actions
      description: 'The Guest’s room was isready, please give keys',
      needsCompletionConfirmation: true,
      expiresInMinutes: 5, //settings
      textMessage: '', //settings
      scriptSample: 'Hey Sree, Room is ready .Enjoy your day.',
      isTriggerEvent: true, //settings
      offerLimit: 10,
      __v: 0,
      directives: ['Give guest a relaxed service'],
      actors: [
        //staffTarget
        'bellhop',
        'frontDesk1',
      ],
    },
    name: 'Guest Arrival', //triggerName
    __v: 0,
    triggers: [],
  },
];
