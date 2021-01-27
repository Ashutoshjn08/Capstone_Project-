import {shallow} from 'enzyme'
import Home from './Home';
import toJson from 'enzyme-to-json'

const wrapper = shallow(<Home/>)
test ('renders correctly',() => {
  expect(wrapper).toMatchSnapshot();
  console.log(toJson(wrapper))
})