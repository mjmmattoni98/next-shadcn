import TitlePage from "@/components/component/TitlePage";
import NewJobOfferForm from "./NewJobOfferForm";

export default async function NewJobOfferPage() {
  return (
    <>
      <TitlePage
        title="Nueva oferta de trabajo"
        description="Añade una nueva oferta de trabajo"
      />
      <div className="py-4">
        <NewJobOfferForm />
      </div>
    </>
  );
}
