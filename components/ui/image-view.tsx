import Image from "next/image"

export default function ImageView({view, setPreview, src} : any){

    return (
        <div className={view ? "w-full z-40 h-screen fixed flex flex-1 items-start justify-center bg-white bg-opacity-15 backdrop-blur-md pt-10 -mt-16 -ml-2" : "hidden"}>
            <div className="max-w-fit h-[95%] flex flex-col gap-3 transition-all duration-100 rounded-lg active:brightness-50 active:ring-2 active:ring-teal-400 pt-5 -translate-y-5">
                {view ? (
                    <>
                        <div className="text-center text-sm font-semibold">
                            {src['name']}
                        </div>
                        <Image src={`https://drive.google.com/thumbnail?id=${src['id']}&sz=w1000`} alt={src['name']} width={200} height={200} className=" w-full h-full object-center shadow-md object-fill rounded-lg" />
                        <div onClick={()=> (setPreview([false, '']))} className="text-center cursor-pointer font-semibold py-2 text-2xl w-14 h-14 rounded-full bg-white bg-opacity-20 backdrop-blur-sm mx-auto">
                            X
                        </div>
                    </>
                ) : ''}
            </div>
        </div>
    )
}