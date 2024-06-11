import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { LeftMenuItem } from "./left_menu_item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RightMenuItem } from "./right_menu";

interface DataProps {
    extenxionId?: string;
}
export const HomeUi = (props: DataProps) => {

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="h-screen max-w-full max-h-full"
        >
            <ResizablePanel defaultSize={25}>
                <ScrollArea className="p-4 h-screen">
                    <div className="flex h-full items-center p-6">
                        <span className="font-semibold">{<LeftMenuItem />}</span>
                    </div>
                </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
                <ScrollArea className="p-4 h-screen">
                    <div className="flex h-full items-center p-6">
                        <RightMenuItem extenxionId={props.extenxionId} />
                    </div>
                </ScrollArea>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}