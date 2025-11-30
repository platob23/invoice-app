import React from "react";
import {Edit, Plus} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const mockData = [
    {
        name: "Max Mustermann",
        company: "Musterfirma GmbH",
        address: "Musterweg 2323, 8000 Zürich",
    },
    {
        name: "Anna Beispiel",
        company: "Beispiel Solutions AG",
        address: "Beispielstrasse 12, 4001 Basel",
    },
    {
        name: "Lukas Muster",
        company: "MusterTech",
        address: "Hauptallee 99, 3000 Bern",
    },
    {
        name: "Sarah Magnet",
        company: "Magnetica AG",
        address: "Industriestrasse 45, 6300 Zug",
    },
    {
        name: "Peter Modell",
        company: "Modellbau GmbH",
        address: "Modellweg 3, 9000 St. Gallen",
    },
];

function Page() {
    return (
        <>
            <div>
                {/*Add Customer Button*/}
                <Button className={"min-w-full mb-4"}><Plus/> Add Customer</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {mockData.map((item, index) => (
                    <Card key={index} className="relative">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-semibold">
                                {item.name}
                            </CardTitle>
                            <Edit className="absolute top-4 right-4 text-muted-foreground hover:text-primary cursor-pointer" />
                        </CardHeader>

                        <CardContent className="text-sm text-muted-foreground">
                            <p>{item.company}</p>
                            <p>{item.address}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Page;
