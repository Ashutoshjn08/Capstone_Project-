import { shallow } from "enzyme";
import Home from "./Home";
import toJson from "enzyme-to-json";
import renderer from "react-test-renderer";

test("renders correctly (snapshot)", () => {
  const wrapperSnap = renderer.create(<Home />);
  let tree = wrapperSnap.toJSON();
  expect(tree).toMatchSnapshot();
  console.log(toJson(wrapperSnap));
});

describe("renders correnctly", () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Home/>)
  })
  
  test("heading renders correctly", ()=>{
    let wrapperHeading = wrapper.find(`[data-test='heading']`);
    expect(wrapperHeading.length).toBe(1)
  })
  test("text renders correctly", ()=>{
    let wrapperHeading = wrapper.find('p');
    expect(wrapperHeading.text()).toEqual('This system has provision to view the list of products and allows only the registered and authenticated users to add, edit, delete the products and view the product detail. The user interface to the system is implemented using React. The data about the products is managed in a JSON server. The client application interfaces with the JSON Server through http to retrieve and store data.')
  })
  test("text renders correctly", ()=>{
    let wrapperHeading = wrapper.find('span');
    expect(wrapperHeading.text()).toEqual('View Our Products')
  })
});
