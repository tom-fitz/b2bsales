<template>
    <v-container fluid class="background-image">
        <v-row>
            <v-col cols="12" class="padding-126">
                <v-row
                :align="alignment"
                :justify="justify"
                >
                    <v-col 
                        md="8"
                        :align="alignment"
                        :justify="justify"
                    >
                        <h2>Contact Form</h2>
                    </v-col>
                </v-row>
                <v-row
                :align="alignment"
                :justify="justify"
                >
                    <v-col 
                        md="8"
                        :align="alignment"
                        :justify="justify"
                    >
                        <p>You can use this area to display any information you want to preface your vistors. I will get back to you in X business days. There can also be some information displayed in a 'Thank You' alert message when the user submits this form. We can also add a dialog or pop up alerting with an agreement for users to submit their information, like a privacy policy or something like that.</p>
                    </v-col>
                </v-row>
                <v-row
                :align="alignment"
                :justify="justify"
                >
                    <v-col md="4">
                        <v-card
                        class="ma-3 pa-6 contact-form"
                        dark
                        color="white"
                        tile
                        >
                        <form>
                            <v-text-field
                            v-model="name"
                            :counter="30"
                            label="Name"
                            required
                            color="#993333"
                            light
                            ></v-text-field>
                            <v-text-field
                            v-model="email"
                            label="E-mail"
                            color="#993333"
                            required
                            light
                            ></v-text-field>
                            <v-text-field
                            v-model="company"
                            :counter="30"
                            label="Company Name"
                            color="#993333"
                            required
                            light
                            ></v-text-field>
                            <v-btn tile color="#993333" class="mr-4" @click="submit">submit</v-btn>
                            <v-btn tile color="#993333" @click="clear">clear</v-btn>
                        </form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
    name: "contact-section",
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(30) },
      email: { required, email },
    },
    data: () => ({
      alignment: 'center',
      justify: 'center',
      name: '',
      email: '',
      company: '',
    }),

    // computed: {
    //   nameErrors () {
    //     const errors = []
    //     if (!this.$v.name.$dirty) return errors
    //     !this.$v.name.maxLength && errors.push('Name must be at most 30 characters long')
    //     !this.$v.name.required && errors.push('Name is required.')
    //     return errors
    //   },
    //   companyNameErrors () {
    //     const errors = []
    //     if (!this.$v.company.$dirty) return errors
    //     !this.$v.company.maxLength && errors.push('Company Name must be at most 30 characters long')
    //     !this.$v.company.required && errors.push('Company Name is required.')
    //     return errors
    //   },
    //   emailErrors () {
    //     const errors = []
    //     if (!this.$v.email.$dirty) return errors
    //     !this.$v.email.email && errors.push('Must be valid e-mail')
    //     !this.$v.email.required && errors.push('E-mail is required')
    //     return errors
    //   },
    // },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.checkbox = false
      },
    },
}
</script>
<style scoped>
.background-image {
  background: linear-gradient(
      rgba(153, 0, 0, 0.75), 
      rgba(255, 102, 102, 0.75)
    ), url("../assets/b.jpg");
  background-size: cover;
  color: white;
}
.contact-form {
  opacity: 0.80;
}
.padding-126 {
  padding-top: 126px;
  padding-bottom: 126px;
}
</style>