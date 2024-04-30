import {useParams} from "react-router";
import LoadingRequest from "@/app/components/requests/loadingRequest";


const HistoryRequest = () => {

    const {title} = useParams();

    return (
        <div>
            <LoadingRequest isHistory={true} textRequest={title}/>
        </div>
    )
}

export default HistoryRequest;
