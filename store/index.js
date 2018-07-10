import axios from 'axios'

axios.defaults.baseURL = 'http://210.68.186.61:8082'

export const state = () => ({
    domain: axios.defaults.baseURL,
    locales: ['tw', 'en'],
    locale: 'en',
    en: {},
    tw: {},
})

export const mutations = {
    SET_LANG(state, locale) {
        // console.log(locale);
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    },
    SET_INDEX(state, data) {
        state[state.locale].index = data;
    },
    SET_NEWS(state, data) {
        var i, obj = {};
        for (i = 0; i < data.length; i++) { 
            obj[data[i].id] = data[i];
            data[i].cata = "news";
        }
        state[state.locale].news = obj;

        var o, obj2 = {};
        for (o = 0; o < data.length; o++) { 
            obj2[data[o].priority] = data[o];
            data[o].cata = "news";
        }
        state[state.locale].news_order = obj2;
    },


}

export const actions = {
    async GET_INDEX({ commit, state }) {
        const { data } = await axios.get(`/Index/${state.locale}`, {
            headers: {
                language: state.locale
            }
        })
        commit('SET_INDEX', data);
    },
    async GET_NEWS({ commit, state }) {
        const { data } = await axios.get(`/News/${state.locale}`, {
            headers: {
                language: state.locale
            }
        })
        commit('SET_NEWS', data);
    },
    async GET_DATA({ commit, state }) {
        // const dataBlog = await axios.get(`/Blogs/${state.locale}`)
        const dataNews = await axios.get(`/News/${state.locale}`)
        // const dataVideo = await axios.get(`/Videos/${state.locale}`)
        
        // commit('SET_BLOG', dataBlog.data);
        commit('SET_NEWS', dataNews.data);
        // commit('SET_VIDEO', dataVideo.data);
        
    },


}