<template>
  <PageTemplateBody :name="name"></PageTemplateBody>
</template>
<script>
import PageTemplateBody from "./components/page-body"
export default {
  name: "officeHours-page",
  components: {
    PageTemplateBody
  },
  data(){
    return {
      name: "officeHours"
    }
  },
}
</script>
