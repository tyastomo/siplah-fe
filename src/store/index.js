import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
// import router from "../router";
// import axios from "axios";
// import VuexPersist from "vuex-persistedstate";
import AxiosPlugin from 'vue-axios-cors';
import { axs, execute } from "./helper/api";

execute();
Vue.use(Vuex);
Vue.use(AxiosPlugin);

const defaultState = () => {
  return {
        kategori: [],
        loading: true,
        isLoggedIn: false,
        loaderStatus: false,
        produk: [],
        detailProduk: {},
        user: {},
        cart: [],
    }
};
export default new Vuex.Store({
    state: defaultState(),

    actions: {
      sso: ({commit}, token) => {   
        commit("authSuccess_mutation", token)
      },
      getKategori: ({ commit }) => {
        axs.get("/categories?")
          .then(response => {
            commit(
              "getKategori_mutation",
              response
            );
          })
      },

      getProduct: ({ commit }) => {
        axs.get("/items?sort_field=created_at&sort_direction=desc")
          .then(response => {
            commit(
              "getProduct_mutation",
              response
            );
          })
      },

      goKategori: ({ commit }, id) => {
        axs.get("/items?sort_field=created_at&sort_direction=desc&category_id="+id)
          .then(response => {
            commit(
              "getProduct_mutation",
              response
            );
          })
      },

      productDetails: ({commit}, idProduct) => {
        axs.get("/items/" + idProduct)
        .then(response => {
          commit("productDetails_mutation", response);
        });
      },

      cart: ({commit}) => {
        axs.get("/carts")
        .then(response => {
          commit("cart_mutation", response);
        });
      },

      addChart: ( data ) => {
        axs.post("/carts", data, {headers:
          {Authorization: 'Bearer ' + window.localStorage.getItem("token")}})
        .then(response => {
          console.log(response)
        })
      }
    },

    mutations: {
        authSuccess_mutation: (state) => {
          state.isLoggedIn = true;
        },
        getKategori_mutation: (state, response) => {
          state.kategori = response.data;
          state.loaderStatus = true;
        },
        getProduct_mutation: (state, response) => {
          state.produk = response.data.data.data;
          state.loaderStatus = true;
        },
        cart_mutation: (state, response) => {
          state.cart = response.data;
        },
        productDetails_mutation: (state, response) => {
          state.detailProduk = response;
          state.loaderStatus = true;
          console.log(state.detailProduk.data.data.name)
        }
    },

    getters: {
      isLoggedIn: state => state.isLoggedIn,
      detail: state => state.detailProduk.data
    }
});