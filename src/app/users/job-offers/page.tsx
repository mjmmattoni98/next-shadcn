import TitlePage from "@/components/component/TitlePage";
import { JobOffer, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<JobOffer[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "Frontend Developer",
      description: "We are looking for a frontend developer",
      competencies: [
        {
          id: "1",
          name: "React",
          description:
            "React is a JavaScript library for building user interfaces",
        },
        {
          id: "2",
          name: "TypeScript",
          description:
            "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript",
        },
      ],
    },
    {
      id: "2",
      name: "Backend Developer",
      description: "We are looking for a backend developer",
      competencies: [
        {
          id: "1",
          name: "Node.js",
          description:
            "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser",
        },
        {
          id: "2",
          name: "Express.js",
          description: "Express.js is a web application framework for Node.js",
        },
      ],
    },
    {
      id: "3",
      name: "Fullstack Developer",
      description: "We are looking for a fullstack developer",
      competencies: [
        {
          id: "1",
          name: "React",
          description:
            "React is a JavaScript library for building user interfaces",
        },
        {
          id: "2",
          name: "Node.js",
          description:
            "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser",
        },
      ],
    },
  ];
}

export default async function JobOffersPage() {
  const data = await getData();

  return (
    <>
      <TitlePage
        title="Ofertas de trabajo"
        description="Aquí puedes ver todas las ofertas de trabajo disponibles."
      />
      <div className="py-4">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
