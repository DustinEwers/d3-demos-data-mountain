

var makeBook = function(title, author, isbn){
    return { author: author, title:title, isbn: isbn }
}
var data = [
    makeBook("God's Debris", "Scott Adams", 1),
    makeBook("The Obstacle is the Way", "Ryan Holiday", 2),
    makeBook("Meditations", "Marcus Aurelius", 3),
    makeBook("Tools of Titans", "Tim Ferriss", 4),
    makeBook("Norse Mythology", "Neil Gaiman", 5)
]

function printBook(book){
    return "<strong>" + book.title + "</strong> by " + book.author;
}

// bind selection to nodes
var p = d3.select("#bookList")
  .selectAll("p")
  .data(data);
  
//update 
p.html(printBook);

// Enter…
p.enter().append("p")
    .html(printBook);

// Exit…
p.exit().remove();
