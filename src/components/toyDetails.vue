<template>
    <section class="toy-details" v-if="toy">
        <div>
            Toy name: {{ toy.name }} |
            Toy price: {{ toy.price }} |
            Toy type: {{ toy.type }} |
            In stock: {{ toy.inStock }}
            <hr />
            <pre>{{ toy.reviews }}</pre>
            <form @submit.prevent="submitReview">
                <label>
                    Review toy:
                    <textarea
                        v-model="reviewToAdd.content"
                        cols="30"
                        rows="10"
                        placeholder="Make your review here..."
                    ></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
        <chatRoom :topic="toyId"/>
    </section>
</template>

<script>
import chatRoom from "../components/chatRoom.vue"
import { toyService } from "../services/toyService.js"
import ChatRoom from "../components/chatRoom.vue"

export default {
    data() {
        return {
            toy: null,
            reviewToAdd: {
                content: "",
                aboutToyId: this.$route.params.toyId,
            }
        };
    },
    created() {
        this.loadToy();
    },
    computed: {
        toyId() {
            return this.$route.params.toyId;
        }
    },
    methods: {
        loadToy() {
            toyService.getById(this.toyId).then(toy => {
                this.toy = toy;
            });
        },
        submitReview() {
            this.$store.dispatch({ type: "addReview", review: this.reviewToAdd });
        }
    },
    watch: {
        toyId: {
            handler() {
                this.loadToy();
            },
            immediate: true,
        }
    },
    components: { chatRoom }
}
</script>
