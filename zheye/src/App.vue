<template>
  <div class="container">
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏, 这是test1专栏, 这是test1专栏, 这是test1专栏',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2专栏'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏，这是test3专栏',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4专栏',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg'
  }
]
export default defineComponent({
  name: 'App',
  setup () {
    return {
      list: testData
    }
  },
  components: {
    ColumnList
  }
})
</script>

<style>

</style>
