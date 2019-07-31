const update_news_item = () => {
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
       let detailLayout = `
       <div class="wrapper">
       <form action="" class="form" onsubmit="return onSubmit()" method="post" enctype="multipart/form-data" id="myForm" name="myForm">
         <fieldset>
         <legend>Add Images to News</legend>
         <p>Avatar:<span id="avatar-error"> </span></p>
         <input type="file" id="avatar" name="avatar" required accept="image/png, image/jpeg, image/gif, image/jpg" >
         <input type="hidden" name="id" id="id" value="${id}" />
         <input type="submit" value="Submit Image" />
         </fieldset>
       </form>
    </div>
       `;
       document.getElementById('update-news-item').insertAdjacentHTML('beforeend', detailLayout)
       //  console.log(avatar, url, createdAt);
    })
}


update_news_item();