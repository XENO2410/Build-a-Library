class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let sum = 0;
    for (let i = 0; i < this._ratings.length; i++) {
      sum += this._ratings[i];
    }
    return sum / this._ratings.length;
  }

  addRating(rating) {
    if (rating >= 1 && rating <= 5) {
      this._ratings.push(rating);
    } else {
      console.log('Invalid rating. Please provide a rating between 1 and 5.');
    }
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  shuffle() {
    // Shuffle the songs array randomly and return the shuffled array
    let currentIndex = this._songs.length;
    let randomIndex, tempValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = this._songs[currentIndex];
      this._songs[currentIndex] = this._songs[randomIndex];
      this._songs[randomIndex] = tempValue;
    }

    return this._songs;
  }
}

class Catalog {
  constructor() {
    this._mediaItems = [];
  }

  get mediaItems() {
    return this._mediaItems;
  }

  addMediaItem(media) {
    this._mediaItems.push(media);
  }
}

// Example usage:

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log('Average Rating:', historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log('Average Rating:', speed.getAverageRating());

const cd = new CD('CD Title', 'Artist Name', ['Song 1', 'Song 2', 'Song 3']);
console.log('Shuffled Songs:', cd.shuffle());

const catalog = new Catalog();
catalog.addMediaItem(historyOfEverything);
catalog.addMediaItem(speed);
catalog.addMediaItem(cd);

console.log('Catalog:', catalog.mediaItems);
