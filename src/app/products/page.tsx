import React from "react";
import { Edit, Plus } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const productData = [
    {
        article: "ART-001",
        title: "Hosting",
        price: "39.99 €",
        info: "Basic Hosting Abonement",
    },
    {
        article: "ART-002",
        title: "Hosting++",
        price: "59.99",
        info: "Hosting with changes",
    },
    {
        article: "ART-003",
        title: "Basic Website",
        price: "800.00 €",
        info: "",
    },
    {
        article: "ART-004",
        title: "Premium Website",
        price: "1000.00 €",
        info: "",
    },
    {
        article: "ART-005",
        title: "Business Website",
        price: "1300.00 €",
        info: "",
    },
];

function Page() {
    return (
        <>
            <div>
                {/*Add Product Button*/}
                <Button className="min-w-full mb-4">
                    <Plus /> Add Product
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {productData.map((item, index) => (
                    <Card key={index} className="relative">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-semibold">
                                {item.title}
                            </CardTitle>
                            <Edit className="absolute top-4 right-4 text-muted-foreground hover:text-primary cursor-pointer" />
                        </CardHeader>

                        <CardContent className="text-sm text-muted-foreground flex flex-col gap-1">
                            <p className="font-medium text-primary">Artikel: {item.article}</p>
                            <p className="font-semibold">{item.price}</p>

                            {item.info && (
                                <p className="text-muted-foreground text-sm">{item.info}</p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Page;
