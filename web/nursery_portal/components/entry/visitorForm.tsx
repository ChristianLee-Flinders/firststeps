import { Card } from '../ui/card';
import { Users } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

interface VisitorFormProps {
  onComplete: () => void;
  onBack: () => void;
}

const VisitorFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    company: z.string().optional(),
    visiting: z.string().min(1, 'Visiting field is required'),
    purpose: z.string().min(1, 'Purpose is required'),
})

function VisitorForm({ onComplete, onBack }: VisitorFormProps) {

    // Define form
    const form = useForm<z.infer<typeof VisitorFormSchema>>({
        resolver: zodResolver(VisitorFormSchema),
        defaultValues: {
            name: '',
            company: '',
            visiting: '',
            purpose: '',
        },
    });

    // Submit handler
    function onSubmit(values: z.infer<typeof VisitorFormSchema>) {
        console.log(values)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
            <Card className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 mb-4">
                    <Users className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Visitor Sign In</h2>
                    <p className="text-slate-600">Please provide your details</p>
                </div>

                {/* Form */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-xl">
                        <FormField control={form.control} name='name' render={({ field }) => (
                            <FormItem>
                                <FormLabel className='block text-sm font-semibold text-slate-700'>Full Name *</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter your name' className="h-14 text-lg rounded-xl" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        

                        <FormField control={form.control} name='company' render={({ field }) => (
                            <FormItem>
                                <FormLabel className='block text-sm font-semibold text-slate-700'>Company/Organisation</FormLabel>
                                <FormControl>
                                    <Input placeholder='Optional' className="h-14 text-lg rounded-xl"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name='visiting' render={({ field }) => (
                            <FormItem>
                                <FormLabel className='block text-sm font-semibold text-slate-700'>Who are you visiting? *</FormLabel>
                                <FormControl>
                                    <Input placeholder='Staff or department name' className="h-14 text-lg rounded-xl" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name='purpose' render={({ field }) => (
                            <FormItem>
                                <FormLabel className='block text-sm font-semibold text-slate-700'>Purpose of Visit *</FormLabel>
                                <FormControl>
                                    <Input placeholder='e.g., Meeting, Delivery, Inspection' className="h-14 text-lg rounded-xl"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <div className="flex gap-4 pt-4">
                        <Button
                            type="button"
                            onClick={onBack}
                            variant="outline"
                            className="flex-1 h-14 text-lg rounded-xl"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 h-14 text-lg rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
                        >
                            Sign In
                        </Button>
                        </div>
                    </form>
                </Form>
            </Card>
        </div>
        </div>
    )
}

export default VisitorForm