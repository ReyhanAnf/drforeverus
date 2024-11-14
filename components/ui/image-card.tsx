import Image from "next/image"

export default function ImageCard({src, setPreview} : any){
    return(
        <div onClick={()=> (setPreview([true, src]))} className="w-full hover:scale-105 transition-all duration-100 shadow-md rounded-lg active:brightness-50 active:ring-2 active:ring-teal-400">
            <Image priority src={`https://drive.google.com/thumbnail?id=${src['id']}&sz=w1000`} alt={src['name']} width={100} height={100} className="w-full h-72 object-center object-cover rounded-lg" />
        </div>
    )
}