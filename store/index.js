// store/index.js
export const state = () => ({
  isMenuChecked: false, // 记录菜单是否展开的状态
});

export const mutations = {
  toggleMenu(state) {
    state.isMenuChecked = !state.isMenuChecked;
    console.log('state.isMenuChecked:', state.isMenuChecked);
  }
};

export const actions = {
  toggleMenu({ commit }) {
    commit('toggleMenu'); // 调用 mutation 切换菜单状态
  },
};
