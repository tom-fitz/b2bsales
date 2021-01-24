<template>
  <PageTemplateBody :name="name"></PageTemplateBody>
</template>
<script>
import PageTemplateBody from "./components/page-body"
export default {
  name: "OneDayCourse-page",
  components: {
    PageTemplateBody
  },
  data(){
    return {
      name: "oneDayCourse"
    }
  },
}
</script>