<template>
  <div class="springers-container">
    <dog :image="springer.message" @getNewDog="handleGetNew" />
  </div>
</template>

<script>
import Dog from './components/Dog.vue'

export default {
  name: 'springers',
  components: {
    Dog
  },
  data() {
    return {
      springer: {
        message: '',
        status: ''
      }
    }
  },
  methods: {
    async getSpringer() {
      fetch('https://dog.ceo/api/breed/springer/english/images/random')
        .then(response => response.json())
        .then(data => (this.springer = data))
    },
    handleGetNew() {
      this.getSpringer()
    }
  },
  mounted() {
    this.getSpringer()
  }
}
</script>

<style scoped>
h4 {
  margin-left: 20px;
}
</style>