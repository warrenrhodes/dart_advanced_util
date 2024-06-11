import { StringData } from "../extenxion/data/string/string";
import { LowPageData, PageData } from "../utils";



interface DataProps {
    extenxionId?: string;
}

export const RightMenuItem = (props: DataProps) => {
    if (!props.extenxionId) {
        return (
            <div>
                Error
            </div>
        );
    }
    if (props.extenxionId === PageData.String) {

        return (
            <div>
                <StringData/>
            </div>
        );
    }
    return (
        <div>
            <p>Wait....</p>
        </div>
    );
}