<template>
  <PageTemplateBody :name="name"></PageTemplateBody>
</template>
<script>
import PageTemplateBody from "./components/page-body"
export default {
  name: "Terms-page",
  components: {
    PageTemplateBody
  },
  data(){
    return {
      name: "terms"
    }
  },
}
</script>
