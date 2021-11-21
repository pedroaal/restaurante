import { baseURL } from "@/config/api";

const myLoader = (src) => {
  return `${baseURL}${src}`
}

const Image = ({ name, url }) => (
  <img className="w-full" src={myLoader('helado.jpeg')} alt={name} />
)

export default Image