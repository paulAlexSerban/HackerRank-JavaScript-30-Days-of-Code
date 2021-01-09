class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  display() {
    console.log(`Implement the display method!`)
  }
}

/**   
 *   @param title The book's title.
 *   @param author The book's author.
 *   @param price The book's price.
 **/

class MyBook extends Book {
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }

  display() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Price: ${this.price}`);
  }
}