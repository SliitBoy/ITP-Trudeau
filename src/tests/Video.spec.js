import "core-js/stable";
import "regenerator-runtime/runtime";
import { mount } from "@vue/test-utils";
import Video from "../views/Video.vue";
import videoplaylist from "../components/video/videoPlaylist.vue";

describe("VideoComponentTest", () => {
  it(`renders and mounts and initializes child component videoplaylist`, () => {
    const wrapper = mount(Video, {
      stubs: {
        appVideoPlaylists: false
      }
    });
    expect(wrapper.findComponent(videoplaylist).exists()).toBe(true);
  });
});
