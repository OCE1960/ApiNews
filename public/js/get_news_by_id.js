const get_news_by_id = () => {
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
       let url = news.url;
       let createdAt = news.createdAt;
       let title = news.title;
       let detailLayout = `
       <div>
       <img src='${avatar}' />
       <p>${title}</p>
       <p>${url}</p>
       <p>${createdAt}</p>
       <p>
       <span class="update"> <a href='update_news_item.html?${id}'> update News Item </a> </span>
          <span class="update"> <a href='add_images_to_news.html?${id}'> Add Image to News </a></span>
          <form method="post" id="delete"> 
          <span class="update">
           <button onclick="deleteNews()"> Delete News </button>
          <input type="hidden" value="${id}" id="id" name="id" /></span>
          </form> 
       </p>
       <div>
       <form action="" class="form" onsubmit="return onSubmit()" method="post" enctype="multipart/form-data" id="myForm" name="myForm">
       <fieldset>
       <legend>Add your Comment</legend>
       <p>Name:<span id="name-error"> </span></p>
       <input type="text" id="name"  name="name" required pattern="[A-Za-z\\s]{3,}" placeholder="Name: Min. of 3 Character">
       <input type="hidden" id="newsId" name="newsId" value="${id}" />
     
       <p>Avatar:<span id="avatar-error"> </span></p>
       <input type="file" id="avatar" name="avatar" required accept="image/png, image/jpeg, image/gif, image/jpg" > <br>
        
       <p>Comment:<span id="comment-error"> </span></p>
       <textarea name="comment" id="comment" placeholder="Comment: Min. of 20 Character" required minlength="20"></textarea>
       <input type="submit" value="Post Comment" />
       </fieldset>
     </form> 
       </div>
       </div>
       `;
       document.getElementById('newsDetail').insertAdjacentHTML('beforeend', detailLayout)
       //  console.log(avatar, url, createdAt);
    })
}


get_news_by_id();