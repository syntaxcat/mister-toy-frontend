<template>
  <section class="chat-room">
    <h1>chat-room</h1>
     <ul id="messages">
         <li v-for="msg in messages">
            {{msg}}
         </li>
     </ul>
    <form id="form" @submit.prevent="sendMsg()">
        <select>
            <option value="">All</option>
        </select>
        <input id="input" autocomplete="off" v-model="newMsg" />
        <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
  import { socketService } from "../services/socketService.js"

  export default {
    props: {
      topic: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
          messages: [],
          newMsg: '',
      };
    },
    created() {
        socketService.emit("chat topic", this.topic)
        socketService.on("chat addMsg", (msg) => {
            this.messages.push(msg);
        })
    },
    computed: {},
    methods: {
        sendMsg() {
            socketService.emit("chat newMsg", this.newMsg);
            this.newMsg = '';
        }
    },
    watch: {},
  };
</script>
