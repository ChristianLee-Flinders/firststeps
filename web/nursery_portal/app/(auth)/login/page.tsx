import Logo from '@/components/ui/logo'
import LoginForm from './form'
import { Card, CardContent } from '@/components/ui/card'

function LoginPage() {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-[#f7faf9]'>
            <Card className="w-full max-w-md">
                <CardContent className="flex flex-col items-center text-center space-y-4 py-4">
                    <Logo className="scale-110 mb-1" />
                    <h2 className='text-4xl font-semibold text-slate-700'>Log in</h2>
                    <p className='text-slate-500 text-base -mt-2'>Hi there! Please enter your login details.</p>

                    <div className='w-full mt-4'>
                        <LoginForm />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginPage
