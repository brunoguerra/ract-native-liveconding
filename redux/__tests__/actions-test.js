import { createAction, actions, defaultActions } from '../actions';
import { expect } from 'chai';

describe('Action Creation', () => {
  it('sample action', () => {
    const newAction = createAction('sample');
    expect(newAction).to.be.an('object');
    expect(newAction).to.have.property('request');

    const { request } = newAction;
    const type = 'SAMPLE_REQUEST';
    expect(request()).to.have.property('type', type);
  })

  it('check default actions', () => {
    defaultActions.forEach((action) => {
      expect(actions[action]).to.have.property('success');
    })
  })
})
