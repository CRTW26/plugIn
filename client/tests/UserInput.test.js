import { h } from 'preact';
import UserInput from '../src/components/UserInput/UserInput';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Test of UserInput', () => {

	test('Title of form is rendered', () => {
		const context = shallow(<UserInput />);
		expect(context.find('h1').text()).toBe('Find a charging point for your electric vehicle');
  });

  test('Prompt for postcode is rendered', () => {
		const context = shallow(<UserInput />);
		expect(context.find('p').text()).toBe('Enter your postcode to begin');
  });

  test('Input is rendered', () => {
		const context = shallow(<UserInput />);
		expect(context.find('input'));
  });

  test('Button is rendered', () => {
		const context = shallow(<UserInput />);
		expect(context.find('button').text()).toBe('Search');
  });

});
