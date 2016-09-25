const types = [
  'REQUEST',
  'SUCCESS'
]

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
const actionName = (action, type) =>
  `${action.toUpperCase()}_${type.toUpperCase()}`;

const createAction = (action) => {
  return types.reduce((res, cur) => Object.assign(res, {
    [`${action}${capitalize(cur)}`]: (payload) => ({
      type: actionName(action, cur),
      payload
    })
  }), {})
};

export const bootAction = () => ({
  type: 'BOOT_ACTION'
});

export const counterAction = () => ({
  type: 'INCREMENT'
});

const checkNews = createAction('checkNews');
export const actions = {
  checkNews
}

// debugging action creation
const newAction = createAction('sample');
console.log('Action creation', newAction);
console.log('Action creator call', newAction.sampleRequest());
