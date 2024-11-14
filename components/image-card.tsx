import Image from "next/image"

export default function ImageCard({src} : any){
    return(
        <div key={src['id']} className="w-full">
            <Image src={`https://drive.google.com/thumbnail?id=${src['id']}&sz=w1000`} alt={src['name']} width={100} height={100} className="w-full h-72 object-fill rounded-lg" />
        </div>
    )
}