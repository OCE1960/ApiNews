const edit_comment_on_a_news = () => {
    url = url.split("=");
     let id = url[1].toString().split('&')[0];
     const commentId = url[2];
    // console.log(id);
    let apiUrl = `http://5d2c2f2b8c90070014972225.mockapi.io/api/v2/news/${id}/comments/${commentId}`;

    fetch(apiUrl).then((res) => {
        if(!res.ok){
            throw new Error('HTTP ERROR: STATUS:' + res.status);   
        }
        return res.json();
    }).then(async (res) => {
       let news = await res;
       let avatar = news.avatar;
       let comment = news.comment;
       let detailLayout = `
       <div class="wrapper">
       <form action="" class="form" onsubmit="return onSubmit()" method="post" enctype="multipart/form-data" id="myForm" name="myForm">
         <fieldset>
         <legend>Update News Item</legend>
         <p>Avatar:<span id="avatar-error"> </span></p>
         <input type="file" id="avatar" name="avatar" required accept="image/png, image/jpeg, image/gif, image/jpg" >
         <input type="hidden" name="id" id="id" value="${id}" />
         <input type="hidden" name="commentId" id="commentId" value="${commentId}" />
         <p>Title:<span id="comment-error"> </span></p>
         <textarea name="comment" id="comment" required placeholder="Comment: Min. of 10 Character"> 
          ${comment}</textarea>
         <input type="submit" value="Update" />
         
         </fieldset>
       </form>
    </div>
       `;
       document.getElementById('update-news-item').insertAdjacentHTML('beforeend', detailLayout)
       //  console.log(avatar, url, createdAt);
    })
}


edit_comment_on_a_news();