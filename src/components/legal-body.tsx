import Link from "next/link";
import {
  LEGAL_EMAIL,
  LEGAL_UPDATED,
  legalDocs,
  legalOrder,
  type LegalId,
} from "@/lib/legal";

const hrefs: Record<LegalId, string> = {
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  refund: "/refund",
};

function RichText({ text }: { text: string }) {
  const parts = text.split(LEGAL_EMAIL);
  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 ? (
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-iris hover:text-iris-dark">
              {LEGAL_EMAIL}
            </a>
          ) : null}
        </span>
      ))}
    </>
  );
}

export function LegalBody({ id }: { id: LegalId }) {
  const doc = legalDocs[id];

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm text-muted">Last updated {LEGAL_UPDATED}</p>
      <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
        {doc.intro.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
        {doc.sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="display pt-4 text-xl font-semibold text-ink">{section.title}</h2>
            {section.blocks.map((block, index) =>
              block.kind === "p" ? (
                <p key={`${section.title}-${index}`}>
                  <RichText text={block.text} />
                </p>
              ) : (
                <ul key={`${section.title}-${index}`} className="list-disc space-y-2 pl-5">
                  {block.items.map((item) => (
                    <li key={item}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}
      </div>
      <nav className="mt-12 border-t border-line pt-6" aria-label="Policies">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Policies</p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {legalOrder.map((policyId) => (
            <li key={policyId}>
              {policyId === id ? (
                <span className="text-ink">{legalDocs[policyId].title}</span>
              ) : (
                <Link href={hrefs[policyId]} className="text-iris hover:text-iris-dark">
                  {legalDocs[policyId].title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
