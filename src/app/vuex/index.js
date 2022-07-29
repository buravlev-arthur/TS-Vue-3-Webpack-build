/* eslint-disable no-param-reassign */
import { createStore } from 'vuex';
import Module1 from './module_1';

export default createStore({
  state: () => ({}),

  mutations: {},

  modules: {
    m_1: Module1,
  },
});
