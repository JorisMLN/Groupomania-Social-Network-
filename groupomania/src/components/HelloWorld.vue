<template>
  <div class="hello">
    <h1>{{ subtitle }}</h1>
    <p>Please check your work email to register you.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    subtitle: String
  }
}
</script>

