const get_comments_on_a_news = () => {
    let url = window.location.search;
    let id = url.split("?")[1];
    // console.log(id);
    let apiUrl = `http://5d2c2f2b8c90070014972225.mockapi.io/api/v2/news/${id}/comments`;

    fetch(apiUrl).then((res) => {
        if(!res.ok){
            throw new Error('HTTP ERROR: STATUS:' + res.status);   
        }
        return res.json();
    }).then(async (res) => {
       let news = await res;
       let detailLayout = `<div></div> `;
       document.getElementById('newsDetail').insertAdjacentHTML('beforeend', detailLayout)
       //  console.log(avatar, url, createdAt);
    })
}


get_comments_on_a_news();