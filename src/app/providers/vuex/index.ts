import { createStore } from 'vuex';
import module_1 from './module_1';

export default createStore({
    state: () => ({
        count: 0
    }),

    mutations: {
        increment(state) {
            state.count += 1;
        }
    },

    modules: {
        m_1: module_1
    }
});

