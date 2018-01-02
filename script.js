var fetch = function() {
    $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: function(data) {
      console.log(data);
      // var bookInfo = {
      //   title: data.items[0].volumeInfo.title,
      //   description: data.items[0].volumeInfo.description,
      //   author: data.items[0].volumeInfo.authors[0],
      //   imageLink: data.items[0].volumeInfo.imageLinks.smallThumbnail        
      // };
      var showBook = function() {
        $(".book").empty();
        $(".book").append(`<h1>${data.items[0].volumeInfo.title}</h1>
                          <p>${data.items[0].volumeInfo.description}<p>
                          <h3>Written by: ${data.items[0].volumeInfo.authors[0]}</h3>
                          <img src="${data.items[0].volumeInfo.imageLinks.smallThumbnail}">`);
      };
      showBook();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};

$(".search-book").on("click", fetch);