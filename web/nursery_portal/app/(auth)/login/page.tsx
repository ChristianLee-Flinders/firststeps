'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react';
import Logo from '@/components/ui/logo'

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Branding */}
                <div className="hidden lg:block">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Logo variant='icon' className='h-full' />
                            <div>
                                <h1 className="text-4xl font-bold text-slate-800">First Steps</h1>
                                <p className="text-slate-600">Nursery Management Portal</p>
                            </div>
                        </div>
                            
                        <div className="space-y-4 mt-12">
                            <h2 className="text-3xl font-bold text-slate-800 leading-tight">
                                Welcome back to<br />your nursery portal
                            </h2>
                            <p className="text-lg text-slate-600">
                                Access your dashboard to manage children, staff, attendance, and everything in between.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-100">
                                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-slate-800">Child Management</p>
                                <p className="text-xs text-slate-500 mt-1">Track progress and development</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-teal-100">
                            <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-3">
                                <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-slate-800">Staff Scheduling</p>
                            <p className="text-xs text-slate-500 mt-1">Manage rotas and timesheets</p>
                        </div>
                    </div>
                </div>
            </div>

                {/* Right Side - Login Form */}
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    <div className="bg-white rounded-3xl shadow-2xl shadow-emerald-100/50 p-8 lg:p-10">
                        <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Sign in to your account</h2>
                        <p className="text-slate-600">Enter your credentials to access the portal</p>
                        </div>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <Label htmlFor="email" className="text-slate-700 font-medium">Email address</Label>
                            <div className="relative mt-2">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@nursery.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10 h-12 rounded-xl border-slate-200 focus:border-emerald-400 focus:ring-emerald-400"
                            />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                            <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                            <button type="button" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                                Forgot password?
                            </button>
                            </div>
                            <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        </div>

                        <div className="flex items-center">
                            <input
                            id="remember"
                            type="checkbox"
                            className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-slate-600">
                            Remember me for 30 days
                            </label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-medium shadow-lg shadow-emerald-200/50 transition-all hover:shadow-xl"
                        >
                            Sign in
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        </form>

                        <div className="mt-8 text-center">
                        <p className="text-sm text-slate-600">
                            Don't have an account?{' '}
                            <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                            Contact your administrator
                            </button>
                        </p>
                        </div>
                    </div>

                    <p className="text-center text-sm text-slate-500 mt-6">
                        Protected by enterprise-grade security
                    </p>
                </div>

                {/* Mobile Branding */}
                <div className="lg:hidden text-center mt-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                            <path d="M12 2C12 2 12 8 12 10C12 12 10 14 8 14C6 14 4 12 4 10C4 8 6 6 8 6C9 6 10 6.5 10.5 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                            <path d="M12 10C12 10 14 8 16 8C18 8 20 10 20 12C20 14 18 16 16 16C14 16 12 14 12 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                            <path d="M12 22V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        </div>
                        <h1 className="text-xl font-bold text-slate-800">First Steps</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
