const types = [
  'REQUEST',
  'SUCCESS'
]

const capitilze = (str) => str.charAt(0).toUpperCase() + str.substr(1);
const actionName = (action, type) =>
  `${action.toUpperCase()}_${type.toUpperCase()}`;

const createAction = (action) => {
  return types.reduce((res, cur) => Object.assign({
    [`${action}${capitalize(cur)}`]: (payload) => {
      type: actionName(action, cur),
      payload
    }
  }), {})
}

export const bootAction = () => ({
  type: 'BOOT_ACTION'
});

export const counterAction = () => ({
  type: 'INCREMENT'
});
