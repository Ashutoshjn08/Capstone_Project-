import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ProductList from "./ProductList";

describe("renders correctly", () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      products: [
        {
          title: "Mens Cotton Jacket",
          price: 40000,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          manufacturer: "Roaster",
          quantity: 1,
          category: "Daily Items",
          image: "https://homepages.cae.wisc.edu/~ece533/images/lena.png",
          view: 282,
        },
        {
          title: "Mens Casual Slim Fit",
          price: 9700,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          manufacturer: "Roaster",
          quantity: 34343,
          category: "Foods",
          image: "https://homepages.cae.wisc.edu/~ece533/images/lena.png",
          view: 971,
        },
      ],
    };
    wrapper = shallow(<ProductList {...props}/>);
  });
  it("renders button name correctly", () => {
    let wrapperName = wrapper.find("span").first();
    expect(wrapperName.render().text()).toEqual(" Price");
    console.log(toJson(wrapperName))
  });
  it('check modal component',()=>{
    let wrapperName = wrapper.find('Modal')
    expect(wrapperName.length).toBe(1)
  })
  it('check modal component',()=>{
    let wrapperName = wrapper.find('a')
    expect(wrapperName.length).toBe(5)
  })
});
