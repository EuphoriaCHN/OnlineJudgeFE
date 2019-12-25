<template>
</template>

<script>
  // eslint-disable-next-line vue/script-indent
  import api from '../../api.js';

  export default {
    mounted() {
      api.logout().then(res => {
        this.$store.dispatch('clearProfile');
        this.$router.replace({
          path: '/'
        });
      });
    }
  };
</script>
