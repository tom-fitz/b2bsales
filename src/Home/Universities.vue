<template>
  <PageTemplateBody :name="name"></PageTemplateBody>
</template>
<script>
import PageTemplateBody from "./components/page-body"
export default {
  name: "Universities-page",
  components: {
    PageTemplateBody
  },
  data(){
    return {
      name: "universities"
    }
  },
}
</script>
