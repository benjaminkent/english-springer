<template>
  <div class="dog-container">
    <main>
      <button @click="handleNewImage">New Image</button>
      <img :src="image" alt="dog" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'dog',
  props: {
    image: String
  },
  methods: {
    handleNewImage() {
      this.$emit('getNewDog')
    }
  }
}
</script>

<style scoped>
.dog-container {
  display: flex;
  justify-content: flex-start;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
button {
  margin-bottom: 1rem;
  border: 1px solid #222;
  background: #222;
  color: #fff;
  border-radius: 5px;
  font-size: 0.75rem;
  padding: 8px 12px;
  cursor: pointer;
}
button:hover {
  background-color: #444;
}
img {
  height: 200px;
  width: 200px;
  object-fit: cover;
  object-position: center;
}
</style>