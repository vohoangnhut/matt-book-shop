<template>
<div :class="(showMessageBar?'':'d-none') + '  message-bar'">
  <div :class="messageClass">
    <Button bsStyle='link' class="btn btn-link close-btn" @click="closeMessageBar">
      <i class="fa fa-times"></i>
    </Button>
    <div>{{ currentMessage }}</div>
  </div>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex';
export default {
  computed: {
    ...mapGetters(['messages']),
    showMessageBar() {
      return this.messages.message && this.messages.message.length > 0;
    },
    messageClass() {
      let mgClass = this.messages.messageClass;
      return "col-12 panel panel-" + mgClass + " " + (this.showMessageBar ? "" : "hidden");
    },
    currentMessage() {
      return this.messages.message;
    }
  },
  methods: {
    ...mapActions(['clearMessage']),
    closeMessageBar() {
      this.clearMessage();
    }
  }
}
</script>
