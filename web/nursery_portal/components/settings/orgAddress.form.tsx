'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"

const infoFormSchema = z.object({
    addressLine1: z.string(),
    addressLine2: z.string().optional(),
    city: z.string(),
    postcode: z.string(),
})

function OrgAddressForm() {

    //Define form
    const form = useForm<z.infer<typeof infoFormSchema>>({
        resolver: zodResolver(infoFormSchema),
        defaultValues: {
            addressLine1: "Placeholder",
            addressLine2: "Placeholder",
            city: "Placeholder City",
            postcode: "PH01 1PH",
        },
    })

    //Define submit handler
    function onSubmit(values: z.infer<typeof infoFormSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField  
                    name="addressLine1" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Organisation name
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="Address Line 1"
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />

                <FormField  
                    name="addressLine2" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Address Line 2
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="Building, suite, etc."
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />

                <FormField  
                    name="city" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                City
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="City"
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />

                <FormField  
                    name="postcode" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Postcode
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="Postcode"
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
        
    )
}

export default OrgAddressForm
