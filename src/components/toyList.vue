<template>
    <section class="toy-list" v-if="toys">
        <ul>
            <li v-for="toy in toys" :key="toy._id">
                <toyPreview :toy="toy"/>
                <div class="actions">
                    <router-link v-if="isAdmin" :to="'/edit/'+toy._id">Edit</router-link>
                    <router-link :to="'/details/'+toy._id">Details</router-link>
                    <button v-if="isAdmin" @click="removeToy(toy._id)">Delete</button>
                </div>
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
        user: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            isAdmin: this.user.isAdmin
        }
    },
    methods: {
        removeToy(toyId){
            this.$emit("removeToy", toyId)
        }
    },
    components: {
        toyPreview,
        toyDetails
    },
}
</script>

<style>

</style>