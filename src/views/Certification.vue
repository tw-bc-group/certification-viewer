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
import AV from 'leancloud-storage'
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
    const query = new AV.Query('Photo')
    query.equalTo('certId', this.$route.params.id)
    query.include(['svg'])
    query.find().then(d => {
      this.backgroundImage = d[0].get('svg').get('url')
    }, err => {
      console.error(err)
      this.backgroundImage = logo
    })
    this.isLoading = false
  }
}
</script>
