const app = Vue.createApp({
  //data, methods
  //   template: "<h2>This is the template</h2>",

  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      title: "The Enormous Egg",
      author: "Oliver Butterworth",
      age: 28,
      books: [
        {
          title: "book1",
          author: "author1",
          img: "assets/adsom.jpeg",
          isFav: true,
        },
        {
          title: "book2",
          author: "author2",
          img: "assets/agos.jpeg",
          isFav: false,
        },
        {
          title: "book3",
          author: "author3",
          img: "assets/acol.jpeg",
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(event, data) {
      console.log(event, event.type);
      if (data) {
        console.log(data);
      }
    },

    handleMousemove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return [...this.books].filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
