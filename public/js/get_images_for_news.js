const get_images_for_news = () => {
    let url = window.location.search;
    let id = url.split("?")[1];
    // console.log(id);
    let apiUrl = `http://5d2c2f2b8c90070014972225.mockapi.io/api/v2/news/${id}/images`;

    fetch(apiUrl).then((res) => {
        if(!res.ok){
            throw new Error('HTTP ERROR: STATUS:' + res.status);   
        }
        return res.json();
    }).then(async (res) => {
       let news = await res;
       let detailLayout = ` <div> </div>`;
       document.getElementById('newsDetail').insertAdjacentHTML('beforeend', detailLayout)
       //  console.log(avatar, url, createdAt);
    })
}


get_images_for_news();