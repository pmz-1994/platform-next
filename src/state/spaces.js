import { reactive, readonly, toRefs } from "vue";
import SpacesService from "@/server/SpaceService";

const loaded = {
  spaces: false,
  currentSpaceUsers: false
};

const state = reactive({
  spaces: [],
  currentSpace: null,
  currentSpaceUsers: []
});

const loadSpaces = async (options = {}) => {
  if (!loaded.spaces || options.forceFetch) {
    state.spaces = await SpacesService.fetchUserSpaces();
    loaded.spaces = true;
  }
  return state.spaces;
};

const loadSpaceUsers = async (space, options = {}) => {
  if (!loaded.currentSpaceUsers || options.forceFetch) {
    state.currentSpaceUsers = await SpacesService.fetchSpaceUsers(space);
    loaded.currentSpaceUsers = true;
  }
  return state.currentSpaceUsers;
};

const createSpace = async space => {
  const newSpace = await SpacesService.createSpace(space);
  state.spaces = [newSpace].concat(state.spaces);
  return newSpace;
};

const updateSpace = async space => {
  const newSpace = await SpacesService.updateSpace(space);
  softUpdateSpace(newSpace);
  return newSpace;
};

const softUpdateSpace = space => {
  state.spaces = state.spaces.map(s => (s.id === space.id ? space : s));
};

const removeSpaceImage = async space => {
  const newSpace = await SpacesService.removeSpaceImage(space);
  softUpdateSpace(newSpace);
  return newSpace;
};

const deleteSpace = async space => {
  await SpacesService.deleteSpace(space);
  state.spaces = state.spaces.filter(s => s.id !== space.id);
  return space;
};

const selectSpace = id => {
  state.currentSpace = state.spaces.find(s => s.id === id) || null;
  return state.currentSpace;
};

export function useSpaces() {
  const readonlyState = readonly(state);
  return {
    ...toRefs(readonlyState),
    loadSpaces,
    loadSpaceUsers,
    createSpace,
    updateSpace,
    softUpdateSpace,
    removeSpaceImage,
    deleteSpace,
    selectSpace
  };
}
