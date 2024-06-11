import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { stringData } from '../../menu/string/data';
import Link from "next/link";

export const StringData = () => {

    return (
        <div>
            <h6 className="font-extrabold text-7xl pb-3 ">String</h6>
            <h5>A collection of extension methods for the <span className="font-bold">String </span> class to add common utility functions.</h5>
            <div className="py-3">
            </div>
            {stringData.map((item, index) => {
                return (
                    <div key={item.title}
                        id={item.title}
                    >
                        <div className="py-3">
                            <h6 className="font-extrabold text-4xl pb-3"><Link className="hover:underline" href={item.link} scroll={true}>{item.title}</Link></h6>
                            <h5>{item.decription}</h5>
                            <div>
                                <SyntaxHighlighter
                                    language={"dart"}
                                    style={vscDarkPlus}
                                    showLineNumbers={true}
                                    wrapLongLines={true}
                                >
                                    {item.code}
                                </SyntaxHighlighter>
                            </div>
                            <div className="py-3">
                                <h6 className="font-extrabold text-xl pb-3">Output</h6>
                                <div className="p-3 bg-slate-900 text-white " ><span style={{ whiteSpace: 'pre' }}>{item.output}</span></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}