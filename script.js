var fetch = function () {
  var title = $("#title").val();
  var buildUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}` // isbn:0439023521
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
      var newHTML = template(data);
      $(".book").append(newHTML); 
      
      
      // END OF HANDLEBARS
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); // END OF AJAX
  $("#isbn").val("");
};

$(".search-book").on("click", fetch);