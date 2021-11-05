<template>
  <div>
    {{id}}
  </div>
</template>
<script>
export default {
  asyncData(context) {
    return {
      id: context.params.id
    }
  },
}
</script>