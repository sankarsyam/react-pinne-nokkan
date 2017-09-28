import {
  loadFlowData,
  loadTriggerEventsData,
  loadDirectives,
  loadActors,
} from './createDashBoard';

describe('loadFlowData', () => {
  it('returns list of triggers ', () => {
    let flow = [
      {
        _id: '59708dc66a71db1f90111b26',
        action: {
          _id: '596e471297aa3418cce56111',
          name: 'First-time Room Entry',
          description: 'Guest enters to room for the firsttime',
          needsCompletionConfirmation: false,
          expiresInMinutes: 5,
          offerLimit: 1,
          textMessage: 'Have a wonderfull stay.',
          scriptSample: 'Hey Sree, Enjoy your day.',
          isTriggerEvent: true,
          __v: 0,
          directives: ['Inform your guest of our Professional Golf facilities'],
          actors: ['bellhop', 'staffBoy'],
        },
        name: 'First-time Room Entry',
        isActive: true,
        __v: 0,
        triggers: [
          {
            _id: '596e471297aa3418cce56501',
            type: 'action',
            subType: 'First-time Room Entry',
            location: null,
            action: {
              _id: '596e471297aa3418cce56111',
              name: 'First-time Room Entry',
              description: 'Guest enters to room for the firsttime',
              needsCompletionConfirmation: false,
              expiresInMinutes: 5,
              offerLimit: 1,
              textMessage: 'Have a wonderfull stay.',
              scriptSample: 'Hey Sree, Enjoy your day.',
              isTriggerEvent: true,
              __v: 0,
              directives: [
                'Inform your guest of our Professional Golf facilities',
              ],
              actors: ['bellhop', 'staffBoy'],
            },
            complaint: null,
            profilePath: null,
            __v: 0,
          },
        ],
      },
    ];
    const action = { type: 'LOAD_FLOW_DATA', flow };
    expect(loadFlowData(flow)).toEqual(action);
  });
});

describe('loadTriggerEventsData', () => {
  it('returns list of triggers ', () => {
    let triggerEvents = [
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
    ];
    const action = { type: 'LOAD_TRIGGER_EVENTS', triggerEvents };
    expect(loadTriggerEventsData(triggerEvents)).toEqual(action);
  });
});

describe('loadDirectives', () => {
  it('returns list of directives ', () => {
    let directiveList = [];
    const action = { type: 'LOAD_DIRECTIVE_LIST', directiveList };
    expect(loadDirectives(directiveList)).toEqual(action);
  });
});

describe('loadActors', () => {
  it('load actors ', () => {
    let targetedActors = ['Front Desk', 'Porter'];
    const action = { type: 'LOAD_ACTOR_LIST', targetedActors };
    expect(loadActors(targetedActors)).toEqual(action);
  });
});
