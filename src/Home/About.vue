<template>
  <PageTemplateBody :name="name"></PageTemplateBody>
</template>
<script>
import PageTemplateBody from "./components/page-body"
export default {
  name: "about-page",
  components: {
    PageTemplateBody
  },
  data(){
    return {
      name: "about"
    }
  },
}
</script>
