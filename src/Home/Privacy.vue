<template>
  <PageTemplateBody :name="name"></PageTemplateBody>
</template>
<script>
import PageTemplateBody from "./components/page-body"
export default {
  name: "Privacy-page",
  components: {
    PageTemplateBody
  },
  data(){
    return {
      name: "privacy"
    }
  },
}
</script>
