import { flushPromises, mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Todos from '@/components/Todos.vue';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            todos: [],
        }
    },
    getters: {
        allTodos: (state) => state.todos
    },
    actions: {
        fetchTodos({commit}) {
            // const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            //     title: 'Test 101', completed: false
            // });
            // console.log('WOrks');
            commit('setTodos', [{
                id: 4323, title: 'Test 101', completed: false
            }]);
        }
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
    }
});

describe('Todos.vue', () => {
    test('check if state got updated', async () => {

        const wrapper = mount(Todos, {
            global: {
                plugins: [store]
            }
        });

        await flushPromises();
        
        expect(wrapper.vm.allTodos.length).toEqual(1);
    })
})