
<template>
  <div class="home">
    <SingUpForm></SingUpForm>
  </div>
</template>

<script>
// @ is an alias to /src
import SingUpForm from '@/components/SingUpForm.vue'

export default {
  name: 'singup',
  components: {
    SingUpForm
  }
}
</script>
