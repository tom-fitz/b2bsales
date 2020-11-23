import { default as axios } from "axios";
import { ref, db } from "@/main";

const parseResponseKeys = (obj) => {
    let response = []
    Object.keys(obj).forEach(key => {
        obj[key].id = key
        response.push(obj[key])
    })
    return response
}

// const fetchImages = (imageName) => {
//     const images = ref.child('images')
//     let image = images.child(imageName)
//     image.getDownloadURL().then((url) => {
//         return imageName = url
//     }).catch(err => {
//         throw new Error(`error fetching images: ${err}`)
//     })
// }

const Api = {
    getLogos: async () => {
      try {
          const resp = await axios.get("https://b2bsales-9a61f.firebaseio.com/logos.json");

          const parsed = parseResponseKeys(resp.data)
          await parsed.forEach(x => {
              const images = ref.child('logos');
              let image = images.child(x.imageName)
              image.getDownloadURL().then((url) => {
                  x.imageName = url
              }).catch(err => err)
          })
          resp.data = parsed
          return resp.data
      }  catch (err) {
          return err
      }
    },
    postNewLogo(logo) {
        return new Promise((resolve, reject) => {
            db.ref().child('logos').push().set(logo)
                .then(() => {
                    // TODO: update the state with the newly updated image
                    resolve(logo)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    updateLogo: (updateLogo) => {
        return new Promise((resolve, reject) => {
            db.ref(`logos/${updateLogo.id}`).update(updateLogo)
                .then(resp => {
                    console.log("resp update: ", resp)
                    resolve(updateLogo)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    getSalesTips: async () => {
        try {
            const resp = await axios.get("https://b2bsales-9a61f.firebaseio.com/sales-tips.json");
            const parsed = parseResponseKeys(resp.data.list)
            parsed.forEach(x => {
                const images = ref.child('salestips');
                let image = images.child(x.imageName)
                image.getDownloadURL().then((url) => {
                    x.imageName = url
                }).catch(err => err)
            })
            resp.data.list = parsed
            return resp.data
        } catch (err) {
            return err
        }
    },
    postSalesTip: (tip) => {
        return new Promise((resolve, reject) => {
            db.ref().child('sales-tips/list').push().set(tip)
                .then(() => {
                    resolve(tip)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    updateSalesTipIntro: (updatedIntro) => {
        return new Promise((resolve, reject) => {
            db.ref(`sales-tips`).update(updatedIntro)
                .then(() => {
                    resolve(updatedIntro)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    updateSalesTip: (updateTip) => {
        return new Promise((resolve, reject) => {
            console.log("tip: ", updateTip)
            db.ref(`sales-tips/list/${updateTip.id}`).update(updateTip)
                .then(() => {
                    resolve(updateTip)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    getTestimonials: async () => {
        try{
            const resp = await axios.get('https://b2bsales-9a61f.firebaseio.com/testimonials.json')
            const parsed = parseResponseKeys(resp.data.list)
            await parsed.forEach(x => {
                const images = ref.child('images')
                let image = images.child(x.imageName)
                image.getDownloadURL().then((url) => {
                    x.imageName = url
                }).catch(err => err)
            })
            resp.data.list = parsed
            return resp.data
        } catch (err) {
            throw new Error(err)
        }
        // return new Promise((resolve, reject) => {
        //     axios.get('https://b2bsales-9a61f.firebaseio.com/testimonials.json')
        //         .then(resp => {
        //             let result = resp.data
        //             const parsed = parseResponseKeys(resp.data.list)
        //             parsed.forEach(x => {
        //                 const images = ref.child('images')
        //                 let image = images.child(x.imageName)
        //                 image.getDownloadURL().then((url) => {
        //                     x.imageName = url
        //                 }).catch(err => reject(err))
        //             })
        //             result.list = parsed
        //             resolve(result)
        //         })
        //         .catch(err => {
        //             reject(err)
        //         })
        // })
    },
    postNewTestimonial(testimonial) {
        return new Promise((resolve, reject) => {
            db.ref().child('testimonials/list').push().set(testimonial)
                .then(() => {
                    // TODO: update the state with the newly updated image
                    resolve(testimonial)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    updateTestimonial: (updateTestimonial) => {
        return new Promise((resolve, reject) => {
            db.ref(`testimonials/list/${updateTestimonial.id}`).update(updateTestimonial)
                .then(resp => {
                    console.log("resp update: ", resp)
                    resolve(updateTestimonial)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    getStandardData: (dbName) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://b2bsales-9a61f.firebaseio.com/${dbName}.json`)
                .then(response => {
                    const parsed = JSON.parse(JSON.stringify(response.data))
                    let obj = Object.keys(parsed).map(i => parsed[i])[0]
                    obj.id = Object.keys(parsed)[0]
                    resolve(obj)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    patchStandardData: (accData, id, dbName) => {
        return new Promise((resolve, reject) => {
            axios.patch(
                `https://b2bsales-9a61f.firebaseio.com/${dbName}/${id}/.json`,
                accData
            )
                .then((resp) => {
                    resolve(resp.data)
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
}

export default Api
