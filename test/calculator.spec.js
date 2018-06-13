import { mount } from "@vue/test-utils";
import Calculator from "../app/Calculator";

describe("Calculator.test.js", () => {
    let vm;

    beforeEach(() => {
        vm = mount(Calculator);
    });

    it("should create a Vue instace on mount", () => {
        expect(vm.isVueInstance()).toBeTruthy();
    });
});
