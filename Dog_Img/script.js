let dogContainer=document.getElementById('dogContainer')
async function getdogData(){
  let url1='https://api.thedogapi.com/v1/images/search'
  let data=await fetch(url1)
  let res=await data.json()
  //console.log(res[0].url)
  dogContainer.innerHTML=`<img class="img-height" src="${res[0].url}">`
}