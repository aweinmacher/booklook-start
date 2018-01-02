var fetch = function () {
  var isbn = $("#isbn").val();
  var buildUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}` // 0439023521
  // AJAX
  $.ajax({
    method: "GET",
    url: buildUrl,
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
          author: data.items[0].volumeInfo.authors,
          imageLink: data.items[0].volumeInfo.imageLinks.smallThumbnail
        }
      );
      $(".book").append(newHTML); // END OF HANDLEBARS
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); // END OF AJAX
  $("#isbn").val("");
};

$(".search-book").on("click", fetch);