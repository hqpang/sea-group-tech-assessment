import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
// import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import 'firebase/compat/firestore';
import {getDatabase, onValue, ref,child} from 'firebase/database'
// import {getFirestore,re} from 'firebase/firestore'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userTasks: [],
    user: null,
    isAuthenticated: false,
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  },
  mutations: {
    setUserTasks(state, payload) {
      state.userTasks = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  actions: {
    userLogin({ commit }, { email, password }) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth,email, password)
        .then(user => {
            commit('setUser', user);
            commit('setIsAuthenticated', true);
            alert("Successfully Logged In! Welcome Back!")
            router.push('/userprofile');
        })
        .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            router.push('/todo');
        });
    },
    userRegister({ commit }, { email, password }) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          alert("You have been successfully registered! Welcome to the team!")
          router.push('/userprofile');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/register');
        });
    },
    userSignOut({ commit }) {
      const auth = getAuth();
        signOut(auth)
          .then(() => {
              commit('setUser', null);
              commit('setIsAuthenticated', false);
              router.push('/signin');
          })
          .catch(() => {
              commit('setUser', null);
              commit('setIsAuthenticated', false);
              router.push('/');
          });
    },

    addNewTask({state} , payload) {
      const db = getDatabase();
      const taskRef = ref(db, 'users' );
      const childRef = child(taskRef,  state.user.user.uid)
      childRef.push(payload.description.label)
    },

    getUserTask({commit}){
      const db =getDatabase();
      const taskRef = ref(db, 'tasks');
      onValue(taskRef, snapshot => {
        commit('setUserTasks', snapshot.val());
      })
    }
  },
  modules: {
  }

})
