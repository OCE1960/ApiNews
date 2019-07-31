const pagination = () => {
    let apiUrl = 'http://5d2c2f2b8c90070014972225.mockapi.io/api/v2/news';
    let i = 0;
    let page = 0;
    let back = 0;
    let next = 0;
    fetch(apiUrl).then((res) => {
        if(!res.ok){
            throw new Error('HTTP ERROR: STATUS:' + res.status);   
        }
        return res.json();
    }).then((res) => {
        let newsContent = res;
        // TO DISPLAY PAGINATION
    let pageNo =Math.ceil(newsContent.length /10);
    let i = 0;
     for (let i = 1; i <= pageNo; i++) {
         let No = i;
         let paginationLayout = `<span><a href='news.html?page=${i}&limit=10'>${i}</a></span>`;
         document.getElementById('pagination').insertAdjacentHTML("beforeend", paginationLayout);
     }

     let url = window.location.search;
     url = url.split("=");
     //console.log(url);
     if( url != ""){
      page = url[1].toString().split('&')[0];
     const limit = url[2];
     if(page > 1 && page < pageNo && page !== undefined ){
         page = +page;
         next = page + 1;
         back = page - 1;
         
     }else{
         page = 1;
         back = 1;
         next = page + 1;
     }
    }else{
        page = 1;
        back = 1;
        next = page + 1;

    }

     let Back = `<span><a href='news.html?page=${back}&limit=10'>Back</a></span>`;
     let Next = `<span><a href='news.html?page=${next}&limit=10'>Next</a></span>`;
     document.getElementById('pagination').insertAdjacentHTML("afterbegin", Back);
     document.getElementById('pagination').insertAdjacentHTML("beforeend",Next);
    })
}
 pagination();

