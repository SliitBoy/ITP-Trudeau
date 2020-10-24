import listStudents from "@/components/accounts/listingStudents.vue";
import {shallowMount} from "@vue/test-utils";

//test to ensure that created student accounts list is displayed
describe("listingStudents.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(listStudents, {
            methods: { fetchData: ()=> {}}
        })
    })

    it("renders", () => {
        expect (wrapper.exists()).toBe(true);
    })
})

