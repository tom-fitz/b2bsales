<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
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
                    <v-col md="8">
                        <v-card
                        class="ma-3 pa-6"
                        outlined
                        tile
                        >
                        <form>
                            <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="30"
                            label="Name"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                            ></v-text-field>
                            <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                            ></v-text-field>
                            <v-text-field
                            v-model="company"
                            :error-messages="nameErrors"
                            :counter="30"
                            label="Company Name"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                            ></v-text-field>
                            <v-select
                            v-model="select"
                            :items="items"
                            :error-messages="selectErrors"
                            label="Company Type"
                            required
                            @change="$v.select.$touch()"
                            @blur="$v.select.$touch()"
                            ></v-select>
                            <v-btn class="mr-4" @click="submit">submit</v-btn>
                            <v-btn @click="clear">clear</v-btn>
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
      select: { required },
    },
    data: () => ({
      alignment: 'center',
      justify: 'center',
      name: '',
      email: '',
      company: '',
      select: null,
      items: [
        'Start Up',
        'Scale Up',
      ]
    }),

    computed: {
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 30 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      companyNameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Company Name must be at most 30 characters long')
        !this.$v.name.required && errors.push('Company Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
}
</script>
<style>
</style>