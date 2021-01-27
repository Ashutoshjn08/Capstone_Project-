import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import SignInForm from './SignInForm';

const wrapper = shallow(<SignInForm/>)
test ('renders correctly',() => {
  expect(wrapper).toMatchSnapshot();
  console.log(toJson(wrapper))
})