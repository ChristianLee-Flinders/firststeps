'use client'
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"


const formSchema = z.object({
    email: z.email(),
    password: z.string()
})

function LoginForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
                <FormField
                    name="email" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem className="md:col-span-2">
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
                    name="password" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem className="md:col-span-2">
                            <FormLabel>
                                Password
                            </FormLabel>
                            <Input
                                {...field}
                                placeholder="Password"
                                className="rounded-xl"
                                />
                        </FormItem>
                    )}
                />

                <Button className="md:col-span-2 mt-2">
                    Login
                </Button>
            </form>
        </Form>
    )
}

export default LoginForm