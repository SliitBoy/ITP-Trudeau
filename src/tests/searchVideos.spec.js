import "core-js/stable";
import "regenerator-runtime/runtime";
import { mount } from "@vue/test-utils";
import searchVideos from "../components/video/searchVideos.vue";

describe("searchVideos Component mount test", () => {
  it(`renders and mounts searchVideos`, () => {
    const wrapper = mount(searchVideos);

    expect(wrapper.findComponent(searchVideos).exists()).toBe(true);
    const button = document.getElementById("#add-video-btn");
    expect(button).toBeDefined();
  });
});
