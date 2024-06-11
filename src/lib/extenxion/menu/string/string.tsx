import Link from 'next/link';
import { stringData } from './data';


export const StringEtenxionMenuItem = () => {
    return (
        <div>
            <h6 className="font-extrabold text-2xl pb-3">String</h6>
            {stringData.map((item, index) => {
                return (
                    <div className="px-5 py-2" key={index}>
                        <Link className="font-normal text-sm hover:underline" href={item.link} scroll={true}>{item.title}</Link>
                    </div>
                )
            })}

        </div>
    );
}