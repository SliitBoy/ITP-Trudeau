<template>
    <div>
        <b-form-input list="my-list-id"></b-form-input>

        <datalist id="my-list-id">
        <option>Manual Option</option>
    <option :key="size" v-for="size in sizes">{{ size }}</option>
    <b-card
    title="Quiz"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-header>MAD</b-card-header>
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  </datalist>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sizes: ['Small', 'Medium', 'Large', 'Extra Large']
      }
    }
  }
</script>