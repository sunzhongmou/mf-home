import React from 'react';
import { mount } from 'enzyme';
import { App } from '../App';
import { createTestStore } from '../_helper/store';

jest.mock('../_components/MicroFrontend', () => {
  const MicroFrontend = () => <div />;
  return MicroFrontend;
});

describe('App', () => {
  let store;
  let app;

  const initialState = {
    alert: {
      type: 'alert-none',
      message: 'ok',
    },
  };

  beforeEach(() => {
    store = createTestStore(initialState);
    app = mount(<App store={store} />);
  });

  const getCurrentRoute = (app) =>
    app.find('Router').prop('history').location.pathname;

  const findByTestAttribute = (component, attr) =>
    component.find(`[data-test='${attr}']`);

  it('Should render component without errors', () => {
    const component = findByTestAttribute(app, 'appComponent');
    expect(component.length).toBe(1);
  });

  it('can render the browse micro frontend', () => {
    expect(getCurrentRoute(app)).toEqual('/about');
  });
});
