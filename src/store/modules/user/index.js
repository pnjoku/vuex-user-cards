import axios from "axios";
const state = {
  users: [],
  user: null,
  sort: "",
};
let sortByZip = (payload) => {
  payload.sort((a, b) => {
    let compare = 0;
    if (a["address"]["zipcode"] > b["address"]["zipcode"]) {
      compare = 1;
    } else if (b["address"]["zipcode"] > a["address"]["zipcode"]) {
      compare = -1;
    }
    return compare;
  });
  return payload;
};
let sortByLastName = (payload) => {
  payload.sort((a, b) => {
    let compare = 0;
    const ANames = a.name.split(" ");
    const ALastName =
      ANames.length === 3 && ANames[2].length === 1
        ? ANames[1]
        : ANames[2] || ANames[1];
    const BNames = b.name.split(" ");
    const BLastName =
      BNames.length === 3 && BNames[2].length === 1
        ? BNames[1]
        : BNames[2] || BNames[1];
    if (ALastName > BLastName) {
      compare = 1;
    } else if (BLastName > ALastName) {
      compare = -1;
    }
    return compare;
  });
  return payload;
};
const mutations = {
  UPDATE_USERS(state, payload) {
    state.users = payload;
  },
  ADD_USER(state, payload) {
    const newUser = {};
    newUser["id"] = payload.id;
    Object.assign(newUser, payload.user);
    const users = state.users;
    users.push(newUser);
    state.users = users;
  },
  UPDATE_USER(state, [payload, id]) {
    if (payload === undefined || payload.length === 0) {
      const user = state.users.find((user) => user.id === id);
      state.user = user;
    } else {
      state.user = payload;
    }
  },
  SORT_USERS_BY_ZIP_ASC(state) {
    const users = sortByZip(state.users);
    state.users = users;
    state.sort = "SORT_USERS_BY_ZIP_ASC";
  },
  SORT_USERS_BY_ZIP_DESC(state) {
    const users = sortByZip(state.users);
    state.users = users.reverse();
    state.sort = "SORT_USERS_BY_ZIP_DESC";
  },
  SORT_USERS_LAST_NAME_ASC(state) {
    const users = sortByLastName(state.users);
    state.users = users;
    state.sort = "SORT_USERS_LAST_NAME_ASC";
  },
  SORT_USERS_LAST_NAME_DESC(state) {
    const users = sortByLastName(state.users);
    state.users = users.reverse();
    state.sort = "SORT_USERS_LAST_NAME_DESC";
  },
};
const actions = {
  getUsers({ commit }) {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      commit("UPDATE_USERS", response.data);
      if (state.sort) {
        commit(state.sort);
      }
    });
  },
  getUser({ commit }, { id }) {
    state.user = null;
    axios
      .get(`https://jsonplaceholder.typicode.com/users`, { params: { id: id } })
      .then((response) => {
        commit("UPDATE_USER", [response.data[0], id]);
      });
  },
  addUser({ commit }, user) {
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, user)
      .then((response) => {
        commit("ADD_USER", response.data);
        if (state.sort) {
          commit(state.sort);
        }
      });
  },
  filter({ commit }, { mutation }) {
    commit(mutation);
  },
};

const getters = {
  user: (state) => state.user,
  users: (state) => state.users,
  usersById: (state) => (id) => {
    return state.users.find((user) => user.id === id);
  },
};

const userModule = {
  state,
  mutations,
  actions,
  getters,
};

export default userModule;
