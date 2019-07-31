
async function imageSlider() {
    let apiUrl = 'http://5d2c2f2b8c90070014972225.mockapi.io/api/v2/news';
    let time = 2000;
    let imageNo = 1
    let img = [];
    let i = 0;
    let images = [];
    fetch(apiUrl).then(async (res) => {
        if(!res.ok){
            throw new Error('HTTP ERROR: STATUS:' + res.status);   
        }
        const response = await res.json();
        return response;
    }).then(async(res) => {
       // console.log(typeof (res));
       displaySlide(res);
    }).catch(error => console.log(error))
   
// return await images;
}

export let displaySlide = async (res) => {
      let responses = await res;
      let imgLenght = responses.length;
      let images = [];
      for (let i = 0; i < imgLenght -1; i++) {
          images.push(responses[i].avatar);
         // document.getElementById('slider').innerHTML = slide;
      }
      images = await images;
      carousel(images); 
     // console.log(images);
}

export let carousel =  (images) => {
        let i = 0;
       // console.log(images.length);
            setTimeout(() => {
                let slide = `<img src='${images[i]}' />`;
                document.getElementById('slider').innerHTML=slide;
                }, 2000)
            if(i < images.length - 1) {
                i++
            }else {
                i = 0;
            }    
      
}



export default imageSlider;