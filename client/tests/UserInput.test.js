import { h } from 'preact';
import UserInput from '../src/components/UserInput/UserInput';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Test of UserInput', () => {
	test('Title of form is rendered', () => {
		const context = shallow(<UserInput />);
		expect(context.find('h1').text()).toBe('Find a charging point for your electric vehicle');
	});
});
