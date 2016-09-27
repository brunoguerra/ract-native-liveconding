export const types = [
  'REQUEST',
  'SUCCESS',
  'FAILURE'
]

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
const actionName = (action, type) =>
  `${action.toUpperCase()}_${type.toUpperCase()}`;

export const createAction = (action) => {
  return types.reduce((res, cur) => Object.assign(res, {
    [`${cur.toLowerCase()}`]: (payload) => ({
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

export const defaultActions = [
  'checkNews',
  'users',
  'alerts'
];

export const actions = defaultActions.reduce((res, cur) =>
  Object.assign(res, { [cur]: createAction(cur) })
, {})
