const is = (type) => (what) => typeof what === type;
const isString = is('string');
const isArray = is('array');

export const combine = (fn1) => (fn2) =>
  function () {
    const newArgs = fn1.apply(fn1, arguments);
    return isArray(newArgs)?
      fn2.apply(fn2, newArgs) :
      fn2(newArgs);
  };

export const requestTypes =
  combine((str) => str.toUpperCase())(
    (base) => [
  `${base}_REQUEST`,
  `${base}_SUCCESS`,
  `${base}_FAILURE`
]);

export const requestTypesCombined = (base) =>
  (requestTypes);

export const crudTypes = (base) => [
  `${base}_CREATE`,
  `${base}_READ`,
  `${base}_UPDATE`,
  `${base}_DELETE`
].reduce((res, cur) => res.concat(requestTypes(cur)), []);

const actionName = (action, type) =>
  `${action.toUpperCase()}_${type.toUpperCase()}`;

// http://megabga.woese.com/post/2018/11/aceitacao

export const createActionHelpers = (types, action) => {
  return types.reduce((res, type) => Object.assign(res, {
    [`${type.toLowerCase()}`]: (payload) => ({
      type,
      payload
    })
  }), {})
};


export const createActionTypes = (base) => createActionHelpers(
  requestTypes(base.toUpperCase()),
  base
)

export const createAction = (type) => (payload) => ({

})

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
  Object.assign(res, { [cur]: createActionTypes(cur) })
, {})
