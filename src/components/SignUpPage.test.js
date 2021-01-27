import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import SignUpForm from './SignUpForm';

const wrapper = shallow(<SignUpForm/>)
test ('renders correctly',() => {
  expect(wrapper).toMatchSnapshot();
  console.log(toJson(wrapper))
})