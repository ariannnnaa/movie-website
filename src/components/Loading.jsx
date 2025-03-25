import { AiOutlineLoading3Quarters } from "react-icons/ai"; // значок загрузки

const Loading = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 bg-black w-full h-full flex 
             pt-80 justify-center gap-5 text-3xl">
            <AiOutlineLoading3Quarters className="animate-spin text-blue-700"/>
                    <p>Загрузка ...</p>
            </div>
        </div>
    );
}

export default Loading;
