<template>
    <section class="toy-preview">
       <h3>{{toy.name}}</h3>
       <hr>
       <h3><span>Price:</span>{{toy.price}}</h3>
       <h3><span>inStock:</span>{{toy.inStock}}</h3>
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