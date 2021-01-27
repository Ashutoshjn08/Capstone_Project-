import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Product from './Product';

const wrapper = shallow(<Product/>)
test ('renders correctly',() => {
  expect(wrapper).toMatchSnapshot();
  console.log(toJson(wrapper))
})