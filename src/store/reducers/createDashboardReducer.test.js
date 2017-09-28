import items from './createDashboardReducer';

describe('createDashboardReducer', () => {
  const initialState = {
    flow: {},
    triggerEvents: [],
    directiveList: [],
    targetedActors: [],
    error: '',
  };

  it('handles LOAD_FLOW_DATA action', () => {
    const action = {
      type: 'LOAD_FLOW_DATA',
      triggerList: [
        {
          categoryName: 'location',
          triggers: [
            {
              __v: 0,
              _id: '596e471297aa3418cce56503',
              action: null,
              compaint: null,
              location: '596e471297aa3418cce56101',
              profilePath: null,
              subType: 'reception',
              type: 'location',
            },
          ],
        },
      ],
    };
  });
});

describe('createDashboardReducer ', () => {
  const initialState = {
    flow: {},
    triggerEvents: [],
    directiveList: [],
    targetedActors: [],
    error: '',
  };

  it('handles LOAD_TRIGGER_EVENTS action', () => {
    const action = {
      type: 'LOAD_TRIGGER_EVENTS',
      triggerEvents: [
        {
          triggers: [
            {
              __v: 0,
              _id: '596e471297aa3418cce56503',
              action: null,
              compaint: null,
              location: '596e471297aa3418cce56101',
              profilePath: null,
              subType: 'reception',
              type: 'location',
            },
          ],
        },
      ],
    };
  });
});

describe('createDashboardReducer ', () => {
  const initialState = {
    flow: {},
    triggerEvents: [],
    directiveList: [],
    targetedActors: [],
    error: '',
  };

  it('handles LOAD_DIRECTIVE_LIST action', () => {
    const action = {
      type: 'LOAD_DIRECTIVE_LIST',
      directiveList: [],
    };
  });
});

describe('createDashboardReducer', () => {
  const initialState = {
    flow: {},
    triggerEvents: [],
    directiveList: [],
    targetedActors: [],
    error: '',
  };

  it('handles LOAD_ACTOR_LIST action', () => {
    const action = {
      type: 'LOAD_ACTOR_LIST',
      targetedActors: ['Front Desk', 'Valet'],
    };
  });
});
