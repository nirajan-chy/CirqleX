import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { SITE_NAME } from "@/lib/constants";
import ServiceDetailClient from "./service-detail-client";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.description,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailClient
      slug={service.slug}
      title={service.title}
      description={service.description}
      features={service.features}
      tags={service.tags}
    />
  );
}
