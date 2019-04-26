<template>
  <div>
    <div
      class="certification"
      :style="{backgroundImage: 'url('+ backgroundImage +')'}"
      v-if="!isLoading"
    ></div>
    <infinite-loading v-if="isLoading"></infinite-loading>
  </div>
</template>

<style scoped lang="stylus">
.certification {
  margin: 10px;
  font-weight: 400;
  height: 500px;
  background-size: 100% 100%;
  text-align: left;
}
</style>

<script>
import actions from '../api'
import { logo } from '../constant'

export default {
  name: 'certification',
  components: {},
  data () {
    return {
      backgroundImage: '',
      isLoading: true
    }
  },
  created () {
    actions.get(this.$route.params.id).then(d => {
      this.backgroundImage = d.data.png.url
    }, err => {
      console.error(err)
      this.backgroundImage = logo
    })
    this.isLoading = false
  }
}
</script>
