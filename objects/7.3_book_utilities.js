const book={
    name : 'My Life',
    author: 'Nasim Daghash',
    year: 2020,
};

const book2={
    name : 'our goal',
    author: 'Nasim Daghash',
    year: 2016,
    publisher :{
        name :'hod-ami',
        location :'maghar',
    },
} ;

const bookUtils={
    getFirstPublished:function(book,book2){
        if(book.year>book2.year)
            return book2.year
        else
        return book.year
    },
    setNewEdition:function(book,editionyear){
         return (book.latestEdition = editionyear); 
    },
    setLanguage:function(book,language){
        return (book.language = language); 
    },
    setTranslation:function(book, lang, trans){
        book.translation ={
            translator :trans,
            language :lang,
        }
    },
    setPublisher:function(book, name, location){
        book.publisher ={
            name :name,
            location :location,
        }
    }
};
 
bookUtils.isSamePublisher = function(b1,b2){
    return b1.publisher.name === b2.publisher.name && b1.publisher.location === b2.publisher.location
}
console.log(bookUtils.getFirstPublished(book,book2));
console.log(bookUtils.setNewEdition(book,2018));
console.log(bookUtils.setLanguage(book,'frinsh'));
console.log(bookUtils.setTranslation(book,'language','translator'));
console.log(bookUtils.setPublisher(book,'hod-ami','maghar'));
console.log(bookUtils.setPublisher(book2,'hod-ami','maghar'));
console.log(book);
console.log(book2);
console.log(bookUtils.isSamePublisher(book,book2));