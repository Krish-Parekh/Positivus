import React from "react";
import TitleWrapper from "@/components/ui/TitleWrapper";
import Typography from "@/components/Typography";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServiceSection() {
  return (
    <section className="mx-4 mt-20 h-screen p-4">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <TitleWrapper variant="primary">
          <Typography variant={2}>Services</Typography>
        </TitleWrapper>
        <span className="text-center md:text-start">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </span>
      </div>

      {/* Service Cards */}
      <ServiceCard
        title="Search Engine#Optimization"
        variants="primary"
        images="https://via.placeholder.com/150"
      />
    </section>
  );
}
