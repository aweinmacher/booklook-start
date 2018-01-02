// AJAX
var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: function (data) {
      console.log(data);
      $(".book").empty();
      // HANDLEBARS
      var source = $("#book-template").html();
      var template = Handlebars.compile(source);
      var newHTML = template(
        {
          title: data.items[0].volumeInfo.title,
          description: data.items[0].volumeInfo.description,
          author: data.items[0].volumeInfo.authors[0],
          imageLink: data.items[0].volumeInfo.imageLinks.smallThumbnail
        }
      );
      $(".book").append(newHTML); // END OF HANDLEBARS
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};

$(".search-book").on("click", fetch);