import DoubleRowCardCarousel from "./double_carousel";

const items = [
  {
    image: "/images/image1.jpg",
    title: "Apple Watch Series 7",
    rating: 4,
    price: 599,
    link: "#",
  },
  {
    image: "/images/image2.jpg",
    title: "Samsung Galaxy Watch",
    rating: 5,
    price: 399,
    link: "#",
  },
  {
    image: "/images/image3.jpg",
    title: "Fitbit Versa 3",
    rating: 4,
    price: 249,
    link: "#",
  },
  {
    image: "/images/image4.jpg",
    title: "Garmin Forerunner",
    rating: 3,
    price: 299,
    link: "#",
  },
  {
    image: "/images/image5.jpg",
    title: "Fossil Gen 5",
    rating: 5,
    price: 199,
    link: "#",
  },
  {
    image: "/images/image6.jpg",
    title: "Huawei Watch GT",
    rating: 4,
    price: 179,
    link: "#",
  },
{
    image: "/images/image6.jpg",
    title: "Huawei Watch GT",
    rating: 4,
    price: 179,
    link: "#",
  },
  {
    image: "/images/image6.jpg",
    title: "Huawei Watch GT",
    rating: 4,
    price: 179,
    link: "#",
  },
  {
    image: "/images/image6.jpg",
    title: "Huawei Watch GT",
    rating: 4,
    price: 179,
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <DoubleRowCardCarousel items={items} />
    </div>
  );
}
