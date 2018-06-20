import { mount } from '@vue/test-utils';
import Calculator from '../app/Calculator';

describe('Component :: Calculator.test.js', () => {
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

    it('should have operation, result and buttons sections in the DOM', () => {
        expect(wrapper.find('.operation').exists()).toBeTruthy();
        expect(wrapper.find('.result').exists()).toBeTruthy();
        expect(wrapper.find('.buttons').exists()).toBeTruthy();
    });

    it('should have memory operations inside button panels', () => {
        expect(wrapper.find('.buttons .memory-ops').exists()).toBeTruthy();
    });

    it('should have extra operations inside button panels', () => {
        expect(wrapper.find('.buttons .extra-ops').exists()).toBeTruthy();
    });

    it('should have standard operations inside button panels', () => {
        expect(wrapper.find('.buttons .standard-ops').exists()).toBeTruthy();
    });
});

describe('Unit :: Calculator.test.js', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Calculator);
    });

    afterEach(() => {
        wrapper.vm.$destroy();
        wrapper.vm.$el.remove();
        wrapper = null;
    });

    it('should have operation and result properties set to 0 at mount', () => {
        expect(wrapper.vm.operation).toEqual(0);
        expect(wrapper.vm.result).toEqual(0);
    });
});
