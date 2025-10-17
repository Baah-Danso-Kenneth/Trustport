import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export interface CardProps{
  title:string,
  image: StaticImageData,
  description:string,
  buttonClassName?:string,
   imageClassName?:string,
} 


export interface TitleDescriptionProps{
  title:string,
  description:string,
  className?:React.ReactNode, 
  titleStyle?:React.ReactNode, 
  descriptionStyle?:React.ReactNode
}