<template>
  <div>
    <header>
      <h1 class="text-danger d-flex justify-content-center">about content</h1>
      <p>{{name}}</p>
    </header>
    <div class="d-flex justify-content-between">
      <ul>
        <li>
          <NuxtLink to="/about/Github">Github</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about/Blog">Blog</NuxtLink>
        </li>
      </ul>
      <NuxtChild/>
      <ul>
        <li v-for="item in jsonData" :key="item.ID">
          {{item.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // 伺服器端生命週期，非同步處理
  // 可以使用 context.axios 或者解構方式 {axios} 將 axios 取出使用
  // 因為有使用自製 plugins，所以可以取用 $DemoText
  async asyncData({$axios, $DemoText}) {
    const apiUrl = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON';
    const jsonData = await $axios.get(apiUrl);
    $DemoText.text('asyncData')
    // axios 大多數都使用 catch 處理錯誤情況
    // Nuxt 中可以使用 plugin 方式處理，在 plugins 新增 axios.js 
    return {
      jsonData: jsonData.data
    }
  },
  
  data() {
    return {
      name: 'Mike',
    }
  },
  mounted() {
    this.$DemoText.text('mounted');
    this.$localStorage.set('nuxtLocalStorage', {name: 'Vic'});
    console.log(this.$localStorage.get('nuxtLocalStorage'))
  },
}
</script>