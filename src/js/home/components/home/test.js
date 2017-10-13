import Home from './';

describe('<Home />', () => {
  function subject(args = {}) {
    const props = {};

    return Enzyme.shallow(
      <Home {...props} />
    );
  }

  it('renders Hello from react', () => {
    expect(subject().text()).toContain('Hello React from Home');
  });
});
