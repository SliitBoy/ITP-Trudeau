import listStaff from "@/components/accounts/listingStaff.vue";
import {shallowMount} from "@vue/test-utils";


//test to ensure that created staff accounts list is displayed
describe("listingStaff.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(listStaff, {
            methods: { fetchData: ()=> {}}
        })
    })

    it("renders", () => {
        expect (wrapper.exists()).toBe(true);
    })
})

