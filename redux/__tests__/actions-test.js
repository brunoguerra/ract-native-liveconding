import { createAction } from '../actions';
import { expect } from 'chai';

describe('Action Creation', () => {
  it('checkNews', () => {
    const newAction = createAction('sample');
    expect(newAction).to.be.an('object');
    expect(newAction).to.have.property('request');

    const { request } = newAction;
    const type = 'SAMPLE_REQUEST';
    expect(request()).to.have.property('type', type);
  })
})
