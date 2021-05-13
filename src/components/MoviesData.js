import { v4 as uuidv4 } from "uuid";

export const moviesData = [
  {
    id: uuidv4(),
    title: "American Assassin",
    description:
      "American Assassin is a 2017 American action thriller film directed by Michael Cuesta and starring Dylan O'Brien, Michael Keaton, Sanaa Lathan, Shiva Negar, and Taylor Kitsch. It was written by Stephen Schiff, Michael Finch, Edward Zwick, and Marshall Herskovitz.",
    posterUrl:
      "https://img4.cdn.cinoche.com/images/ffc974617f92aa7993566464f0670ceb.jpg",
    date: 2017,
    rate: 3,
  },
  {
    id: uuidv4(),
    title: "The GodFather",
    description:
    "The Godfather is a 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same name. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
    date: 1972,
    rate: 5,
  },
  {
    id: uuidv4(),
    title: "Gladiator",
    description:
      "Gladiator is a 2000 epic historical drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson. The film was co-produced and released by DreamWorks Pictures and Universal Pictures.",
    posterUrl:
      "https://i.pinimg.com/originals/49/22/6c/49226cc2be5cb537218993fa89d075a8.jpg",
    date: 2000,
    rate: 4,
  },
  {
    id: uuidv4(),
    title: "Avatar",
    description:
      "Avatar (marketed as James Cameron's Avatar) is a 2009 American[7][8] epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver.",
    posterUrl:
      "https://fr.web.img6.acsta.net/medias/nmedia/18/78/95/70/19485155.jpg",
    date: 2009,
    rate: 4,
  },
];

export default moviesData;