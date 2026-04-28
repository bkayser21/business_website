import { BRAND_NAME } from "@/lib/config";
import DiscoveryForm from "@/components/discovery/DiscoveryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Discovery Form — ${BRAND_NAME}`,
  description: "Tell me about your project before our call.",
};

export default async function DiscoveryPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; email?: string }>;
}) {
  const params = await searchParams;
  const name = params.name ? decodeURIComponent(params.name) : "";
  const email = params.email ? decodeURIComponent(params.email) : "";

  return (
    <div className="min-h-screen bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="pt-8 pb-2 text-center">
          <p className="text-sm text-stone">
            Step 1 of 2 before our call &mdash; takes about 2 minutes
          </p>
        </div>
        <DiscoveryForm initialName={name} initialEmail={email} />
      </div>
    </div>
  );
}
