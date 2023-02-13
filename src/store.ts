import {createStore, Store, useStore as baseUseStore} from "vuex";
import {InjectionKey} from "vue";

export interface IItem {
    id: String;
    title: String;
    src: String;
    description?: String;
    isSelected?: boolean;
}

export interface IState {
    items: Array<IItem>;
    groups: {[key: string]: Array<IItem>};
}

export const key: InjectionKey<Store<IState>> = Symbol();

export function useStore() {
    return baseUseStore(key);
}

const store = createStore<IState>({
    state() {
        return {
            items: [],
            groups: {},
        }
    },

    mutations: {
        addItem(state, item) {
            state.items.push(item);
        }
    }
});

export default store;