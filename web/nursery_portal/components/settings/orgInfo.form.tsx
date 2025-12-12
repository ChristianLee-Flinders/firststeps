'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"

const infoFormSchema = z.object({
    organisationName: z.string(),
    registrationNumber: z.string(),
    email: z.string(),
    phone: z.string(),
    website: z.string(),
})

function OrgInfoForm() {

    //Define form
    const form = useForm<z.infer<typeof infoFormSchema>>({
        resolver: zodResolver(infoFormSchema),
        defaultValues: {
            organisationName: "Placeholder",
            registrationNumber: "Placeholder",
            email: "placeholder@placeholder.co.uk",
            phone: "0115 123 4567",
            website: "https://www.placeholder.co.uk"
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
                    name="organisationName" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Organisation name
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="Organisation name"
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />

                <FormField  
                    name="registrationNumber" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Registration Number
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="Registration Number"
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />

                <FormField  
                    name="email" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="Email"
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />

                <FormField  
                    name="phone" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Phone
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="Phone"
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />

                <FormField
                    name="website" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem className="md:col-span-2">
                            <FormLabel>
                                Website
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="Website"
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
        
    )
}

export default OrgInfoForm
