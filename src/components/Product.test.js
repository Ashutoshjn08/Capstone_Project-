import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Product from './Product';


describe('renders correctly', ()=>{
    const component = shallow(<Product title = 'Hello'/>);
    test ('renders container', ()=>{
        const wrapper = component.find(`[data-test='HeaderComponent']`);
    expect(wrapper.length).toBe(1);
    })

    test ('renders colums', ()=>{
        const wrapper = component.find(`[data-test='col']`);
    expect(wrapper.length).toBe(6);
    })

    test('renders button text', ()=> {
        expect(component.find('.span-btn-update').text()).toBe('Update')
    })
    console.log(toJson(component))
})



