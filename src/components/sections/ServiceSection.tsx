import React from "react";
import TitleWrapper from "@/components/ui/TitleWrapper";
import Typography from "@/components/Typography";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/constants/data";

export default function ServiceSection() {
  return (
    <section className="mx-4 mt-20 h-screen space-y-10 p-4">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <TitleWrapper variant="primary">
          <Typography variant={2}>Services</Typography>
        </TitleWrapper>
        <span className="max-w-2xl text-center md:text-start">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </span>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard
            title={service.title}
            variants={service.variants}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
