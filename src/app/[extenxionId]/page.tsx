import { HomeUi } from "@/lib/home/home_ui";

export default async function Index({ params }: { params: { extenxionId: string } }) {
    const { extenxionId } = params
    return (
        <div>
            <HomeUi extenxionId={extenxionId} />
        </div>
    );
}