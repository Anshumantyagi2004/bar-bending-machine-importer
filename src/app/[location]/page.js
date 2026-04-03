import { serviceLocations } from "@/Data/data";
import CityPage from "./CityPage";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { location } = await params;

    const rawCity = location.split("in-").pop();

    const cityName = rawCity
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
        title: `Bar Bending Machine Importer in ${cityName} | Rebar Bending Machine`,
        description: `Top Bar Bending Machine Importer in ${cityName} offering automatic & heavy-duty rebar bending machines for construction & infrastructure projects.`,
    };
}

const Page = async ({ params }) => {
    const { location } = await params;
    const validCity = serviceLocations.find(
        (c) => c.href.replace("/", "") === location
    );

    if (!validCity) {
        notFound();
    }

    return <CityPage location={location} />;
};

export default Page;