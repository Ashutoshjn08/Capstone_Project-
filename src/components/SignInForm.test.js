import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import SignInForm from './SignInForm';


test ('renders correctly',() => {
  const wrapper = shallow(<SignInForm/>)
  expect(wrapper).toMatchSnapshot();
  console.log(toJson(wrapper))
})

