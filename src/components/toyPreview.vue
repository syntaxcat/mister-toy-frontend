<template>
    <section class="toy-preview" >
       <h3>{{toy.name}}</h3>
       <h3>{{toy.price}}</h3>
       <h3>{{toy.inStock}}</h3>
    </section>
</template>

<script>

export default {
    props: {
        toy: {
            type: Object,
            required: true,
        },
    },
    methods: {},
    components: {}
}
</script>

<style>

</style>