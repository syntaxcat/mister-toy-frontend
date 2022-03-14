<template>
    <section class="toy-list" v-if="toys">
        <ul>
            <li v-for="toy in toys" :key="toy._id">
                <toyPreview :toy="toy"/>
                <router-link :to="'/edit/'+toy._id">Edit</router-link>
                <router-link :to="'/details/'+toy._id">Details</router-link>
                <button @click="removeToy(toy._id)">Delete</button>
            </li>
        </ul>
    </section>
</template>

<script>
import toyPreview from "./toyPreview.vue"
import toyDetails from "./toyDetails.vue"

export default {
    props: {
        toys: {
            type: Array,
            required: true,
        },
    },
    methods: {
        removeToy(toyId){
            this.$emit("removeToy", toyId)
        }
    },
    components: {
        toyPreview,
        toyDetails
    }
}
</script>

<style>

</style>