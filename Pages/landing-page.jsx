import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../src/data/companies.json";
import faqs from "../src/data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import JobPage from "../Pages/Jobpage"
const LandingPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="gradient-title font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight py-4">
          Find Your Dream Job
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <span className="text-lg sm:text-6xl text-white font-semibold">
            and get
          </span>
          <img
            src="/logo.png"
            className="h-12 sm:h-20 lg:h-28 object-contain"
            alt="Hirrd Logo"
          />
        </div>
        <p className="text-gray-300 mt-4 text-sm sm:text-xl max-w-2xl mx-auto">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      {/* Buttons */}
      <div className="flex gap-6 justify-center">
        <Link to={"/Jobpage"}>
          <Button className="bg-blue-800" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/PostJob"}>
          <Button className="bg-red-800" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* Carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex items-center gap-5 sm:gap-12">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 sm:basis-1/4 lg:basis-1/6">
              <img
                src={path}
                alt={name}
                className="h-10 sm:h-14 object-contain mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner */}
      <img
        src="./banner.jpeg"
        className="w-full rounded-xl object-cover max-h-[500px]"
        alt="Banner"
      />

      {/* Job Seeker & Employer Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* FAQs */}
      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
