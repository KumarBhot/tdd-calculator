import { mount } from '@vue/test-utils';
import Calculator from '../app/Calculator';

describe('Calculator.test.js', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Calculator);
    });

    afterEach(() => {
        wrapper.vm.$destroy();
        wrapper.vm.$el.remove();
        wrapper = null;
    });

    it('should create a Vue instace on mount', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should have results and buttons sections in the DOM', () => {
        expect(wrapper.find('.results').exists()).toBeTruthy();
        expect(wrapper.find('.buttons').exists()).toBeTruthy();
    });
});
