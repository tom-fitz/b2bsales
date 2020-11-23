import Vue from "vue";
import Vuex from "vuex";
import Api from "../Api";

Vue.use(Vuex);

export class AboutData {
    id = "";
    title = "";
    text = "";
    buttonText = "";
    buttonLink = "";
}

const formatPatch = (put) => {
    return {
        text: put.text,
        title: put.title,
        buttonText: put.buttonText,
        buttonLink: put.buttonLink
    }
}

const resetMessages = (state) => {
    state.error = ""
    state.success = ""
}

export default new Vuex.Store({
    state: {
        about: {},
        testimonials: {
            list: {},
            title: "",
            text: ""
        },
        founders: {},
        accelerators: {},
        universities: {},
        investors: {},
        oneDayCourse: {},
        twoDayCourse: {},
        officeHours: {},
        privacy: {},
        terms: {},
        logos: {},
        tips: {},
        error: "",
        success: ""
    },
    getters: {
        "fetchData": (state, name) => {
            return state[name]
        },
        "fetchSalesTips": (state) => {
            return state.tips
        }
    },
    actions: {
        "getLogos" : (context) => {
          return new Promise((resolve, reject) => {
              Api.getLogos()
                  .then(resp => {
                      context.commit('getLogos', resp)
                      resolve(resp)
                  })
                  .catch(err => {
                      context.commit('setError', err)
                      reject(err)
                  })
          })
        },
        "postNewLogo" : (context, logo) => {
            return new Promise((resolve, reject) => {
                Api.postNewLogo(logo)
                    .then(resp => {
                        context.commit('postNewLogo', resp)
                        resolve(resp)
                    })
                    .catch(err => {
                        context.commit('setError', err)
                        reject(err)
                    })
            })
        },
        "updateLogo" : (context, updatedLogo) => {
            return new Promise((resolve, reject) => {
                Api.updateLogo(updatedLogo)
                    .then(resp => {
                        context.commit('updatedLogo', updatedLogo)
                        resolve(resp)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        "getData" : (context, name) => {
            return new Promise((resolve, reject) => {
                Api.getStandardData(name)
                    .then(resp => {
                        context.commit(`getStandardData`, {data: resp, name: name})
                        resolve(resp)
                    })
                    .catch(err => {
                        context.commit('setError', err)
                        reject(err)
                    })
            })
        },
        "patchData" : (context, {data: aboutUpdate, name: name}) => {
            return new Promise((resolve, reject) => {
                Api.patchStandardData(formatPatch(aboutUpdate), aboutUpdate.id, name)
                    .then((resp) => {
                        context.commit('setPatchStandardData', {data: aboutUpdate, name: name})
                        resolve(resp);
                    })
                    .catch(err => {
                        context.commit('setError', err)
                        reject(err)
                    })
            })
        },
        "getSalesTips" : (context) => {
          return new Promise((resolve, reject) => {
              Api.getSalesTips()
                  .then(resp => {
                      context.commit('getSalesTips', resp)
                      resolve(resp)
                  })
                  .catch(err => {
                      context.commit('setError', err)
                      reject(err)
                  })
          })
        },
        "postSalesTip" : (context, newTip) => {
            return new Promise((resolve, reject) => {
                Api.postSalesTip(newTip)
                    .then(resp => {
                        context.commit('postNewSalesTip', resp)
                        resolve(resp)
                    })
                    .catch(err => {
                        context.commit('setError', err)
                        reject(err)
                    })
            })
        },
        "updateSalesTip" : (context, updatedTip) => {
            return new Promise((resolve, reject) => {
                Api.updateSalesTip(updatedTip)
                    .then(resp => {
                        context.commit('updateSalesTip', updatedTip)
                        resolve(resp)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        "updateSalesTipIntro" : (context, updatedTipIntro) => {
            return new Promise((resolve, reject) => {
                Api.updateSalesTipIntro(updatedTipIntro)
                    .then(resp => {
                        context.commit('updateSalesTipIntro', updatedTipIntro)
                        resolve(resp)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        "getTestimonials" : (context) => {
            return new Promise((resolve, reject) => {
                Api.getTestimonials()
                    .then(resp => {
                        context.commit('getTestimonials', resp)
                        resolve(resp)
                    })
                    .catch(err => {
                        context.commit('setError', err)
                        reject(err)
                    })
            })
        },
        "postNewTestimonial" : (context, testimonial) => {
            return new Promise((resolve, reject) => {
                Api.postNewTestimonial(testimonial)
                    .then(resp => {
                        context.commit('postNewTestimonial', resp)
                        resolve(resp)
                    })
                    .catch(err => {
                        context.commit('setError', err)
                        reject(err)
                    })
            })
        },
        "updateTestimonial" : (context, updatedTestimonial) => {
            return new Promise((resolve, reject) => {
                Api.updateTestimonial(updatedTestimonial)
                    .then(resp => {
                        context.commit('updatedTestimonial', updatedTestimonial)
                        resolve(resp)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    },
    mutations: {
        "getLogos" : (state, logos) => {
            state["logos"] = logos
            state["logos"] = Object.assign({}, state["logos"])
        },
        "updatedLogo" : (state, updatedLogo) => {
            console.log("id: ", updatedLogo.id)
            console.log("updatedLogo: ", updatedLogo)
            state.logos[updatedLogo.id] = updatedLogo
            state.logos = Object.assign({},  state.logos)
        },
        "postNewLogo" : (state, logo) => {
            state.logos.push(logo)
            resetMessages(state)
            state.success = 'New Logo successfully posted'
            state.logos = Object.assign({}, state.logos)
        },
        "getStandardData" : (state, {data: data, name: name}) => {
            state[name] = data
            state[name] = Object.assign({}, state[name])
        },
        "setPatchStandardData" : (state, {data: patchResponse, name: name}) => {
            state[name] = patchResponse
            resetMessages(state)
            state.success = `Page successfully updated.`
            state[name] = Object.assign({}, state[name])
        },
        "getSalesTips" : (state, tips) => {
            state.tips = tips
            state.tips = Object.assign({}, state.tips)
        },
        "postNewSalesTip" : (state, tip) => {
            state.tips.list.push(tip)
            resetMessages(state)
            state.success = 'New sales tip successfully posted'
            state.tips = Object.assign({}, state.tips)
        },
        "updateSalesTipIntro" : (state, updatedTipIntro) => {
            state.tips.text = updatedTipIntro.text
            state.tips.title = updatedTipIntro.title
            resetMessages(state)
            state.success = 'Sales tip successfully updated'
            state.tips = Object.assign({}, state.tips)
        },
        "updateSalesTip" : (state, updatedTip) => {
            state.tips.list[updatedTip.id] = updatedTip
            resetMessages(state)
            state.success = 'Sales tip successfully updated'
            state.tips = Object.assign({}, state.tips)
        },
        "getTestimonials" : (state, tests) => {
            state.testimonials.title = tests.title
            state.testimonials.text = tests.text
            state.testimonials.list = tests.list
            state.testimonials = Object.assign({}, state.testimonials)
        },
        "postNewTestimonial" : (state, testimonial) => {
            state.testimonials.list.push(testimonial)
            resetMessages(state)
            state.success = 'New testimonial successfully posted'
            state.testimonials = Object.assign({}, state.testimonials)
        },
        "updatedTestimonial" : (state, updatedTestimonial) => {
            state.testimonials.list[updatedTestimonial.id] = updatedTestimonial
            state.testimonials = Object.assign({},  state.testimonials)
        },
        "setError" : (state, error) => {
            resetMessages(state)
            state.error = `Error occurred. Contact Tom: ${error}`
        }
    }
});