import MarathonImage from "../assets/images/marathon.svg";
import BikeImage from "../assets/images/mountain-bike.svg";
import WeddingImage from "../assets/images/wedding-photography.svg";


const blogs = [
    {
        id: 1,
        title: "Life lessons with Katie Zaferes",
        image: MarathonImage,
        imageAlt: "Marathon",
        rating: 5.0,
        stocks: 6,
        location: "USA",
        price: 136
    },
    {
        id: 2,
        title: "Learn wedding photography",
        image: WeddingImage,
        imageAlt: "Wedding Photo",
        rating: 5.0,
        stocks: 3,
        location: "USA",
        price: 125
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        image: BikeImage,
        imageAlt: "Mountain Bike",
        rating: 4.8,
        stocks: 2,
        location: "USA",
        price: 50
    }
]

export default blogs;