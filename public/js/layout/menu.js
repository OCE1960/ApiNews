const menu = () => {
    let menuLayout = `
    <nav>
    <ul>
        <li class="brand" ><a href="#"> ETRANZACT CHALLENGE </a></li>
        <li><a href="index.html">Home</a></li>
        <li><a href="add_news_item.html">Add News</a></li>
        <li><a href="#">Update News</a></li>
    </ul>
</nav>
    `
 document.getElementById('menu').insertAdjacentHTML("beforeend",menuLayout);
}

menu();