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

  it('test for factory demo', function() {
    expect(Factory.build('person', { first_name: 'Ram' })).toEqual({
      first_name: 'Ram',
      last_name: 'Poxxy'
    })
  });
});
