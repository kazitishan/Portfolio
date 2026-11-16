import info from "@/data/info.json";

const { links } = info;

export const metadata = {
  title: `Resume | ${info.profile.name}`,
  description: `Resume of ${info.profile.name}.`,
  alternates: { canonical: "/resume/" },
};

export default function Resume() {
  return (
    <main className="container flex flex-col max-w-full">
      <div className="flex justify-center">
        <div className="p-3 flex flex-col rounded-xl border bg-card text-card-foreground shadow my-4 mx-2 w-full max-w-4xl">
          <object
            data={`${links.resume}#view=FitH`}
            type="application/pdf"
            className="rounded-xl w-full h-[80vh]"
          >
            <p className="text-sm p-4">
              Your browser can&apos;t display PDFs inline. Use the buttons below to view or download the resume.
            </p>
          </object>

          <div className="flex gap-2 mt-2 justify-center">
            <a href={links.resume} target="_blank" rel="noopener noreferrer">
              <div className="flex align-middle p-2 bg-white rounded-lg hover:bg-gray-300 transition cursor-pointer items-center">
                <p className="text-xs font-semibold text-black">Open in New Tab</p>
                <img src="/icons/link.svg" alt="Link" className="w-4 h-4 ml-1 filter invert" />
              </div>
            </a>

            <a href={links.resume} download>
              <div className="flex align-middle p-2 bg-white rounded-lg hover:bg-gray-300 transition cursor-pointer items-center">
                <p className="text-xs font-semibold text-black">Download</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
