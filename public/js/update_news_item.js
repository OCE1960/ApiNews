const update_news_item = () => {
    let url = window.location.search;
    let id = url.split("?")[1];
    // console.log(id);
    let apiUrl = `http://5d2c2f2b8c90070014972225.mockapi.io/api/v2/news/${id}`;

    fetch(apiUrl).then((res) => {
        if(!res.ok){
            throw new Error('HTTP ERROR: STATUS:' + res.status);   
        }
        return res.json();
    }).then(async (res) => {
       let news = await res;
       let avatar = news.avatar;
       let title = news.title;
       let detailLayout = `
  
       <div class="wrapper">
       <form action="" class="form" onsubmit="return onSubmit()" method="post" enctype="multipart/form-data" id="myForm" name="myForm">
         <fieldset>
         <legend>Update News Item</legend>
         <p>Avatar:<span id="avatar-error"> </span></p>
         <input type="file" id="avatar" name="avatar" required accept="image/png, image/jpeg, image/gif, image/jpg" >
         <input type="hidden" name="id" id="id" value="${id}" />
         <p>Title:<span id="error-title"> </span></p>
         <input type="text" id="title"  name="title" value="${title}" required pattern="[A-Za-z\\s]{10,}" placeholder="Title: Min. of 10 Character">

         <input type="submit" value="Update" />
         
         </fieldset>
       </form>
    </div>
       `;
       document.getElementById('update-news-item').insertAdjacentHTML('beforeend', detailLayout)
       //  console.log(avatar, url, createdAt);
    })
}


update_news_item();