const book={
    title : 'My Life',
    author: 'Nasim Daghash',
    year: 2020,
    pages : 250 ,
    publisher : 'zomet sfarim'

}

//console.log(book);

function a_book (book){
    // console.log (`The book ${book.title} was written by ${book.author}  in the year ${book.year}`);
    return (`The book ${book.title} was written by ${book.author}  in the year ${book.year}`);
}

a_book(book);