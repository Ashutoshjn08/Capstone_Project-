import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

let wrapper;

describe('renders correctly', ()=>{
    beforeEach(()=>{
        wrapper = shallow(<App/>)
    })
    it('renders correctly routes element', ()=>{
        const routeWrapper = wrapper.find('Route')
        expect(routeWrapper.length).toBe(8)
    })
    it('renders correctly link element', ()=>{
        const linkWrapper = wrapper.find('Links')
        expect(linkWrapper.length).toBe(1)
    })
    
    it('renders correctly home element', ()=>{
        const homeWrapper = wrapper.find('Home')
        expect(homeWrapper.length).toBe(1)
    })
    
})