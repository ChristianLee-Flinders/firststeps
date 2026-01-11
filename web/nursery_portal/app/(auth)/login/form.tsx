'use client'
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { login } from "@/lib/appwrite/actions/auth.actions"
import { createPageUrl } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, Lock, EyeOff, Eye, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"


const formSchema = z.object({
    email: z.email().min(1, "Email is required"),
    password: z.string()
})

function LoginForm() {
    
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const result = await login({email: data.email, password: data.password});
            if (result.success) {
                router.push("/dashboard");
            } else {
                console.error('Login failed:', result.error);
            }
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    name="email" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                                Email address
                            </FormLabel>
                            <div className="relative mt-2">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <Input
                                    {...field}
                                    placeholder="you@nursery.com"
                                    className="pl-10 h-12 rounded-xl border-slate-200 focus:border-emerald-400 focus:ring-emerald-400"
                                />
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="password" 
                    control={form.control} 
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center justify-between mb-2">
                                <FormLabel htmlFor="password" className="text-slate-700 font-medium">Password</FormLabel>
                                <Link className="text-sm text-emerald-600 hover:text-emerald-700 font-medium" href={createPageUrl('forgot-password')}>
                                    Forgot password?
                                </Link>
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <Input
                                    {...field}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="pl-10 pr-12 h-12 rounded-xl border-slate-200 focus:border-emerald-400 focus:ring-emerald-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                    ) : (
                                    <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className=" w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-medium shadow-lg shadow-emerald-200/50 transition-all hover:shadow-xl"
                >
                    {isLoading === true ? (
                        <span className="flex items-center justify-center">
                            <Loader2 className="animate-spin mr-2 w-5 h-5" />
                            Signing in...
                        </span>
                    ) : (
                        <>
                            Sign in
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                    )}
                </Button>
            </form>
        </Form>
    )
}

export default LoginForm