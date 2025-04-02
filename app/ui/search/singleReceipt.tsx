import { FormContents } from "@/app/lib/definitions";

export default function SingleReceipt({form}: {form: FormContents}) {
    return (
        <div className="w-full h-12 border border-zinc-200">
            <h1 className="">Phiếu #{form.id}</h1>
        </div>
    )
}