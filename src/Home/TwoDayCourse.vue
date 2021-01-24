<template>
  <PageTemplateBody :name="name"></PageTemplateBody>
</template>
<script>
import PageTemplateBody from "./components/page-body"
export default {
  name: "TwoDayCourse-page",
  components: {
    PageTemplateBody
  },
  data(){
    return {
      name: "twoDayCourse"
    }
  },
}
</script>
