<template>
  <PageTemplateBody :name="name"></PageTemplateBody>
</template>
<script>
import PageTemplateBody from "./components/page-body"
export default {
  name: "founders-page",
  components: {
    PageTemplateBody
  },
  data(){
    return {
      name: "founders"
    }
  },
}
</script>
