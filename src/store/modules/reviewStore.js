import { reviewService } from "../../services/reviewService";

export default {
  state: {
    reviews: [],
  },
  getters: {
    reviews({ reviews }) {
      return reviews;
    },
  },
  mutations: {
    setReviews(state, { reviews }) {
      state.reviews = reviews;
    },
    addReview(state, { review }) {
      state.reviews.push(review);
    },
  },
  actions: {
    async addReview(context, { review }) {
      try {
        review = await reviewService.add(review);
        context.commit({ type: "addReview", review });
        return review;
      } catch (err) {
        console.log("reviewStore: Error in addReview", err);
        throw err;
      }
    },
  },
};
