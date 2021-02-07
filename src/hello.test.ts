/**
 * @jest-environment jest-environment-jsdom-global
 */
import {reconfigureJsdom} from './reconfigureJsdom';

describe('test', () => {
  it('reset window location', () => {
    reconfigureJsdom({
      url: 'http://test.com'
    })
    expect(window.location.href).toBe('http://test.com/');
  })
})
