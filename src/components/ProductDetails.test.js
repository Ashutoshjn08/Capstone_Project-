import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ProductDetails from "./ProductDetails";

describe("renders correctly", () => {
  const props = {
    location: {
      state: {
        category: "Foods",
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        id: 4,
        image: "https://homepages.cae.wisc.edu/~ece533/images/lena.png",
        manufacturer: "Roaster",
        price: 9700,
        title: "Mens Casual Slim Fit",
      },
    },
  };
  const component = shallow(<ProductDetails {...props} />);
  test("renders heading", () => {
    const wrapper = component.find("h4");
    expect(wrapper.length).toBe(1);
  });
  test("renders heading", () => {
    const wrapper = component.find("img");
    expect(wrapper.length).toBe(1);
  });
});
