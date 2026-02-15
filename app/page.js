import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default  function Home() {

  return (
    <main className="min-h-screen py-12 px-4">
    <div className="container mx-auto ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Server Actions Demo</h1>
        <p className="text-xl text-gray-600 max-2xl  mx-auto">Contact form mongodb with revalidation</p>
      </div>
      <ContactForm />
      <Button variant="primary">
        <Link href="/contact">View List</Link>
        </Button>
    </div>
    </main>
  );
}
