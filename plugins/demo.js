export default ({app}, inject) => {
  // 讓 DemoText 作為全域可使用的函式
  // 使用方式 $DemoText
  inject('DemoText', {
    text(val) {
      console.log('DemoText', val)
    }
  }) 
}