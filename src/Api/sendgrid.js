// import { default as axios } from "axios";
//
// const sgUri = process.env.VUE_APP_SEND_GRID_API_URL
//
// const contactPostFormat = (contact) => {
//     console.log("parse: ", contact)
//     return {
//         list_ids: [process.env.VUE_APP_CONTACT_PAGE_ID],
//         contacts: [{
//             email: contact.email,
//             first_name: contact.name,
//             custom_fields: {
//                 e1_T: contact.company,
//                 e2_T: contact.comment
//             }
//         }]
//     }
// }
//
// const headers = {
//     "Authorization" : `Bearer ${process.env.VUE_APP_SEND_GRID_API_KEY}`,
//     "Content-Type" : "application/json"
// }
//
// const emailApi = {
//     postToContactPageList: async (contact) => {
//         console.log("post: ", contactPostFormat(contact))
//         try {
//             const resp = await axios.put(`${sgUri}/contacts`, Object.assign({}, contactPostFormat(contact)) , {
//                 headers: headers
//             })
//             console.log("api resp: ", resp)
//             return resp.data
//         } catch (err) {
//             return err
//         }
//     },
// }
//
// export default emailApi