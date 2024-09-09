import TitlePage from "@/components/component/TitlePage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Headset, Minus, Plus } from "lucide-react";
import CandidatesCompetenciesChart from "./CandidatesCompetenciesChart";
import CompetenciesChart from "./chart";

type Competency = {
  id: string;
  name: string;
  description: string;
};

type Candidate = {
  id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  currentSalary: number;
  desiredSalary: number;
  birthDate: Date;
  competencies: Competency[];
};

export default async function JobOfferPage({
  params,
}: Readonly<{ params: { id: string } }>) {
  const jobOffer = {
    id: "1",
    name: "Frontend Developer",
    description: "We are looking for a frontend developer",
    competencies: [
      {
        id: "1",
        name: "React",
        description:
          "React is a JavaScript library for building user interfaces.",
      },
      {
        id: "2",
        name: "TypeScript",
        description:
          "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      },
    ],
  };
  const candidates: Candidate[] = [
    {
      id: "1",
      name: "John",
      surname: "Doe",
      phoneNumber: "123456789",
      currentSalary: 30000,
      desiredSalary: 40000,
      birthDate: new Date("1990-01-01"),
      competencies: [
        {
          id: "1",
          name: "React",
          description:
            "React is a JavaScript library for building user interfaces.",
        },
        {
          id: "2",
          name: "TypeScript",
          description:
            "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
        },
      ],
    },
    {
      id: "2",
      name: "Jane",
      surname: "Doe",
      phoneNumber: "987654321",
      currentSalary: 25000,
      desiredSalary: 35000,
      birthDate: new Date("1995-01-01"),
      competencies: [
        {
          id: "1",
          name: "React",
          description:
            "React is a JavaScript library for building user interfaces.",
        },
      ],
    },
  ];
  const availableCandidates = [
    {
      id: "1",
      name: "John",
      surname: "Smith",
      phoneNumber: "123456789",
      currentSalary: 30000,
      desiredSalary: 40000,
      birthDate: new Date("1990-01-01"),
      competencies: [
        {
          id: "1",
          name: "React",
          description:
            "React is a JavaScript library for building user interfaces.",
        },
        {
          id: "2",
          name: "TypeScript",
          description:
            "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
        },
      ],
    },
    {
      id: "2",
      name: "Lara",
      surname: "Croft",
      phoneNumber: "987654321",
      currentSalary: 25000,
      desiredSalary: 35000,
      birthDate: new Date("1995-01-01"),
      competencies: [
        {
          id: "1",
          name: "React",
          description:
            "React is a JavaScript library for building user interfaces.",
        },
      ],
    },
  ];

  return (
    <>
      <TitlePage
        title={`Oferta de trabajo de ${jobOffer.name}`}
        description={jobOffer.description}
      />
      <br />
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-lg font-semibold">Listado de competencias requeridas</h2>
          <br />
          <ul className="space-y-4">
            {jobOffer.competencies.map((competency) => (
              <li key={competency.id} className="pl-5">
                <h3 className="text-lg font-semibold text-blue-400">
                  {competency.name}
                </h3>
                <p className="text-gray-600">{competency.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <CandidatesCompetenciesChart />
      </div>
      <br />
      <h2 className="text-lg font-semibold">Candidatos</h2>
      <Tabs defaultValue="current-candidates">
        <TabsList>
          <TabsTrigger value="current-candidates">
            Candidatos apuntados
          </TabsTrigger>
          <TabsTrigger value="all-candidates">Todos los candidatos</TabsTrigger>
        </TabsList>
        <TabsContent value="current-candidates">
          {candidates.length === 0 ? (
            <p>No hay candidatos apuntados a esta oferta de trabajo.</p>
          ) : null}
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              isAdded={true}
            />
          ))}
        </TabsContent>
        <TabsContent value="all-candidates">
          {availableCandidates.length === 0 ? (
            <p>No hay candidatos apuntados a esta oferta de trabajo.</p>
          ) : null}
          {availableCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              isAdded={false}
            />
          ))}
        </TabsContent>
      </Tabs>
    </>
  );
}

function CandidateCard({
  candidate,
  isAdded,
}: Readonly<{ candidate: Candidate; isAdded: boolean }>) {
  return (
    <Card className="mt-10 border-dashed">
      <CardContent>
        <CardHeader className="flex flex-row items-center justify-between pl-0">
          <CardTitle>
            {candidate.name} {candidate.surname}
          </CardTitle>
          {isAdded ? (
            <div className="flex flex-row gap-2">
              <Button>
                <Headset className="mr-2 h-4 w-4" />
                Generar sesión
              </Button>
              <Button variant="destructive">
                <Minus className="mr-2 h-4 w-4" />
                Eliminar
              </Button>
            </div>
          ) : (
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Añadir
            </Button>
          )}
        </CardHeader>
        <CardDescription>
          <div className="flex flex-row items-center justify-between">
            <div>
              <p>
                <span className="font-semibold">Teléfono:</span>{" "}
                {candidate.phoneNumber}
              </p>
              <p>
                <span className="font-semibold">Salario actual:</span>{" "}
                {candidate.currentSalary}€
              </p>
              <p>
                <span className="font-semibold">Salario deseado:</span>{" "}
                {candidate.desiredSalary}€
              </p>
              <p>
                <span className="font-semibold">Fecha de nacimiento:</span>{" "}
                {candidate.birthDate.toLocaleDateString()}
              </p>
              <br />
              <h3 className="text-lg font-semibold">Competencias</h3>
              <div>
                <ul className="space-y-4">
                  {candidate.competencies.map((competency) => (
                    <li key={competency.id} className="pl-5">
                      <h4 className="text-base font-semibold">
                        {competency.name}
                      </h4>
                      <p className="text-gray-600">{competency.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <CompetenciesChart />
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
