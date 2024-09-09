"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { JobOfferFormSchema } from "@/lib/schema/JobOffer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type Competency = {
  id: string;
  name: string;
  description: string;
};

export default function NewJobOfferForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [competencies, setCompetencies] = useState<Competency[]>([]);
  const [competencyName, setCompetencyName] = useState("");
  const [competencyDescription, setCompetencyDescription] = useState("");

  const exampleCompetencies = [
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
    {
      id: "3",
      name: "Node.js",
      description:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      id: "4",
      name: "Express",
      description:
        "Express is a minimal and flexible Node.js web application framework.",
    },
    {
      id: "5",
      name: "MongoDB",
      description:
        "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
    },
  ];

  const onSubmit = (values: z.infer<typeof JobOfferFormSchema>) => {
    setLoading(true);
    toast(`Añadida nueva oferta de trabajo ${values.name}`, {
      className: "bg-green-500",
      description: "La oferta de trabajo se ha añadido correctamente",
    });
    setLoading(false);
  };

  const addCompetency = () => {
    const newCompetency = {
      id: Math.random().toString(),
      name: competencyName,
      description: competencyDescription,
    };
    setCompetencies([...competencies, newCompetency]);
    setCompetencyName("");
    setCompetencyDescription("");
  };

  const removeCompetency = (id: string) => {
    setCompetencies(competencies.filter((c) => c.id !== id));
  };

  const form = useForm<z.infer<typeof JobOfferFormSchema>>({
    resolver: zodResolver(JobOfferFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
      setCompetencyName("");
      setCompetencyDescription("");
      setCompetencies([]);
      router.push("/users/job-offers");
    }
  }, [form.formState, form.reset]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la oferta</FormLabel>
              <FormControl>
                <Input placeholder="Programador full-stack" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Estamos buscando un programador full-stack con experiencia en React y Node.js"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h4>Lista de competencias</h4>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="competency-name">Nombre de la competencia</Label>
          <Input
            id="competency-name"
            placeholder="Desarrollador de Angular"
            value={competencyName}
            onChange={(e) => setCompetencyName(e.target.value)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="competency-description">
            Descripción de la competencia
          </Label>
          <Textarea
            id="competency-description"
            className="resize-none"
            placeholder="Desarrollador angular con 3 años de experiencia"
            value={competencyDescription}
            onChange={(e) => setCompetencyDescription(e.target.value)}
          />
        </div>
        <Button
          type="button"
          disabled={!competencyName || !competencyDescription}
          onClick={addCompetency}
        >
          Añadir competencia
        </Button>
        {competencies.map((competency) => (
          <div key={competency.id}>
            <CompetencyCard competency={competency} />
            <Button
              className="mt-2"
              onClick={() => removeCompetency(competency.id)}
            >
              Eliminar competencia
            </Button>
          </div>
        ))}
        <br />
        <Button
          type="submit"
          loading={loading}
          disabled={!form.formState.isValid || competencies.length === 0}
        >
          Guardar oferta
        </Button>
      </form>
    </Form>
  );
}

function CompetencyCard({ competency }: Readonly<{ competency: Competency }>) {
  return (
    <Card key={competency.id} className="mt-10">
      <CardContent>
        <CardHeader className="flex flex-row items-center justify-between pl-0">
          <CardTitle>{competency.name}</CardTitle>
        </CardHeader>
        <CardDescription>
          <p>{competency.description}</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
