import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Loading from './Loading';

const wrapper = shallow(<Loading/>)
test ('renders correctly',() => {
  expect(wrapper).toMatchSnapshot();
  console.log(toJson(wrapper))
})