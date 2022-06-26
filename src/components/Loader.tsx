import { HashLoader } from "react-spinners";


export function Loader(){

    return (
        <div className="w-full h-full items-center justify-center p-20">
            <div className="flex flex-col items-center justify-center gap-4">
                <HashLoader color="#00B37E" loading={true} size={30}/>
                <span className="text-green-300 leading-relaxed">
                    Carregando...
                </span>
            </div>
        </div>
    );
}