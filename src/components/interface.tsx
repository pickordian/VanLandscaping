import lawnImg from "../assets/services/1_Lawn.jpg";
import lawnIconD from "../assets/services/2_Lawn.png";
import lawnIconL from "../assets/services/3_Lawn.png";
import pruneImg from "../assets/services/4_Prune.jpg";
import pruneIconD from "../assets/services/5_Prune.png";
import pruneIconL from "../assets/services/6_Prune.png";
import cleanImg from "../assets/services/7_Clean.jpg";
import cleanIconD from "../assets/services/8_Clean.png";
import cleanIconL from "../assets/services/9_Clean.png";
import fenceImg from "../assets/services/10_Fence.jpg";
import fenceIconD from "../assets/services/11_Fence.png";
import fenceIconL from "../assets/services/12_Fence.png";

interface service {
  imgSrc: string;
  alt: string;
  description: string;
  iconSrcD: string;
  iconSrcL: string;
}
interface image {
  imgSrc: string;
  alt: string;
}

export const services_list: service[] = [
  {
    imgSrc: lawnImg,
    alt: "Lawn",
    description:
      "We specialize in lawn mowing and maintenance services, ensuring a well-kept yard befits our customers' lovely homes.",
    iconSrcD: lawnIconD,
    iconSrcL: lawnIconL,
  },
  {
    imgSrc: pruneImg,
    alt: "Tree",
    description:
      "From trimming,  barking to pruning, we cover all aspects to keep your trees healthy and vibrant.",
    iconSrcD: pruneIconD,
    iconSrcL: pruneIconL,
  },
  {
    imgSrc: cleanImg,
    alt: "Clean-up",
    description:
      "We provide thorough spring and fall clean-up services to keep your outdoor space pristine year-round.",
    iconSrcD: cleanIconD,
    iconSrcL: cleanIconL,
  },
  {
    imgSrc: fenceImg,
    alt: "Fence",
    description:
      "We handle fence repairs and maintenance with experience, securing the longevity and integrity of your properties.",
    iconSrcD: fenceIconD,
    iconSrcL: fenceIconL,
  },
];

export const gallery_images: image[] = [
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
  {
    imgSrc: fenceImg,
    alt: "Example work done by Van's landscaping",
  },
];

export interface FormDataObject {
  [key: string]: string;
}
