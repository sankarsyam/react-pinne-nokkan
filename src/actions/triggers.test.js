import { loadTriggerDataList } from './triggers';

describe('loadTriggerDataList', () => {
  it('returns list of triggers ', () => {
    let triggerList = [
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
    ];
    const action = { type: 'FETCH_TRIGGER_LIST_REQUEST', triggerList };
    expect(loadTriggerDataList(triggerList)).toEqual(action);
  });
});
