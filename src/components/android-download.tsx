import { androidApp } from "@/lib/site";

export function AndroidDownload({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div id={compact ? undefined : "download"} className={compact ? "" : "scroll-mt-24"}>
      {compact ? null : (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
          Android
        </p>
      )}
      {compact ? null : (
        <h2 className="display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Install the field app today.
        </h2>
      )}
      <p className={`text-sm leading-6 text-muted ${compact ? "" : "mt-4 max-w-xl"}`}>
        Download the Android APK and open your workspace invite. Google Play
        Store is coming very soon.
      </p>
      <div className={`flex flex-wrap items-center gap-3 ${compact ? "mt-5" : "mt-6"}`}>
        <a
          href={androidApp.href}
          download={androidApp.filename}
          className="rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark"
        >
          Download Android APK
        </a>
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-quiet px-4 py-2 text-sm text-ink">
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 fill-iris"
          >
            <path d="M4 2.8v10.4L13 8 4 2.8z" />
          </svg>
          Google Play · very soon
        </span>
      </div>
      {compact ? null : (
        <p className="mt-4 max-w-xl text-xs leading-5 text-muted">
          If Android asks, allow install from this browser. Partners can keep
          using the mobile web portal.
        </p>
      )}
    </div>
  );
}
