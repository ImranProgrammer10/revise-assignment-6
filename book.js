const searchBook= async ()=>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    // console.log(searchText);
    searchField.value='';
    if(searchText==''){
      // please write something to display
    }
    else{
       const url=`https://openlibrary.org/search.json?q=${searchText}`
    const res=await fetch(url);
    const data=await res.json();
    displaySearchResult(data.docs)

    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>displaySearchResult(data.meals))

    }
}

const displaySearchResult=(books)=>{
    const searchResult=document.getElementById('search-result');
    books.forEach(book=>{
        console.log(book.cover_i)
        const div=document.createElement('div')
       div.classList.add('col-md-3');
       const imgUrl = `https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg`;
      console.log(imgUrl);
       div.innerHTML=`
       <div class="shadow rounded p-3 m-2">
       ${
        book?.cover_i
          ? `<img src=${imgUrl} class="h-75 w-75 mx-auto" alt="...">`
          : ""
      }
       <h3>${book.title}</h3>
       <p>${book.first_publish_year}</p>
       
   </div>
       `;
       searchResult.appendChild(div);
       

    })
   

}
