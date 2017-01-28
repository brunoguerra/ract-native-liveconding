import {
  combine,
  createActionTypes,
  crudTypes,
  actions,
  defaultActions,
  requestTypes
} from '../actions';
import { expect } from 'chai';

describe('Action Creation', () => {
  it('exports', () => {
    expect(createActionTypes).to.be.a('function');
    expect(createActionTypes('base')).to.be.an('object');
    expect(requestTypes('test')).to.be.an('array');
    expect(combine).to.be.a('function');

    const inc = (amount) => (withThis) => withThis + amount;
    const incOne = inc(1);
    const combineWithIncOne = combine(incOne);
    expect(combineWithIncOne(inc(2))(2)).to.be.eql(5);

    const incTwo = combineWithIncOne(incOne);
    const incFive = combine(incTwo)(combine(incOne)(incTwo));
    expect(incFive(0)).to.be.eql(5);
  })

  it('crud types contains', () => {
    const types = crudTypes('base');
    console.log('types from curd', types)
    expect(types).to.contain('BASE_CREATE_REQUEST');
  })

  it('sample action', () => {
    const base = 'sample';
    const newAction = createActionTypes(base);
    expect(newAction).to.be.an('object');
    requestTypes(base).forEach((type) => {
      expect(newAction).to.have.property(type.toLowerCase());
    })
    console.log(newAction);
    const { sample_request } = newAction;
    const type = 'SAMPLE_REQUEST';
    expect(sample_request()).to.have.property('type', type);
  })

  it('check default actions', () => {
    defaultActions.forEach((action) => {
      expect(actions[action]).to.have.property(`${action.toLowerCase()}_success`);
    })
  })
})
