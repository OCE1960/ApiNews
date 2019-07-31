
 const get_all_news = () => {
    let apiUrl = 'http://5d2c2f2b8c90070014972225.mockapi.io/api/v2/news';
    let i = 0;
    fetch(apiUrl).then((res) => {
        if(!res.ok){
            throw new Error('HTTP ERROR: STATUS:' + res.status);   
        }
        return res.json();
    }).then((res) => {
        let newsContent = res;
        // console.log(newsContent);
       //  document.getElementById('news').innerHTML = newsContent;
    // TO DISPLAY NEWS PAGES
        for(let i = 0; i <10 ; i++){
           let avatar = newsContent[i].avatar;
           let id = newsContent[i].id;
           let createdAt = newsContent[i].createdAt;
           let title = newsContent[i].title;
           let url = newsContent[i].url;
           let pageLayout = `
           <div class='news'>
           <img src='${avatar}' />  
          <p>Title:<a href='newsDetail.html?${id}'> ${title} </a> </p>
          <p> Created-at: ${createdAt} </p>
           <p>url: <a href='http://${url}'>${url}</a> </p>
           <p> <a href='newsDetail.html?${id}'>Read More </a></p>
           </div>
           `;
           document.getElementById('news').insertAdjacentHTML("beforeend", pageLayout);
        }
    })
}

 get_all_news();
//apiNews();