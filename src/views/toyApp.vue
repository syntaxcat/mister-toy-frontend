<template>
    <section class="toy-app" v-if="toys">
        <toyFilter @filterBy="filter"/>
        <hr>
        <form @submit.prevent="addToy">
            <input type="text" v-model="emptyToy.name" placeholder="Enter name">
            <input type="number" v-model="emptyToy.price" placeholder="Enter price">
            <select v-model="emptyToy.type">
                <option disabled value="">Type</option>
                <option value="Funny">Funny</option>
                <option value="Adult">Adult</option>
                <option value="Educational">Educational</option>
            </select>
            <label for="inStock">inStock</label>
            <input id="inStock" type="checkbox" v-model="emptyToy.inStock">
            <button type="submit">Add</button>
        </form>
            <hr>
        <toyList :toys="toys" :user="user" @removeToy="removeToy"/>
    </section>
</template>

<script>
import { toyService } from "../services/toyService.js";
import toyList from "../components/toyList.vue"
import toyFilter from "../components/toyFilter.vue";
export default {
    data() {
        return {
            emptyToy: toyService.getEmptyToy()
        }
    },
    computed: {
        toys() {
            return this.$store.getters.toysForDisplay
        },
        user() {
            return this.$store.getters.loggedInUser
        }
    },
    created() {
        this.$store.dispatch({type: "loadToys"})
    },
    methods: {
        removeToy(toyId) {
            this.$store.dispatch({type: "removeToy", id: toyId})
        },
        addToy(){
            this.$store.dispatch({type:"addToy", toy: {...this.emptyToy}})
            .then(() => {
                this.emptyToy = toyService.getEmptyToy();
            })
        },
        filter(filterBy) {
            this.$store.dispatch({type: "filter", filterBy})
        }
    },
    components: {
        toyList,
        toyFilter
    }
}
</script>
