export default function ({$axios, redirect}) {
  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/sorry');
    } 
    if (error.response.status === 404) {
      redirect('/error');
    }
  })
}