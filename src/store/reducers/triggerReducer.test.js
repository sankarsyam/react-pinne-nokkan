import items from './triggerReducer';

describe('triggerReducer', () => {
  const initialState = { triggerList: [], error: '' };
  it('handles FETCH_TRIGGER_LIST_REQUEST action', () => {
    const action = {
      type: 'FETCH_TRIGGER_LIST_REQUEST',
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
