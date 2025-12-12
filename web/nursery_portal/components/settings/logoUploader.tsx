'use client'

import { Button } from '../ui/button'
import { Upload } from 'lucide-react'

interface LogoUploaderProps {
    logoUrl?: string
}

function LogoUploader({ logoUrl }: LogoUploaderProps) {
  return (
    <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden">
            {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
            ) : (
            <Upload className="w-8 h-8 text-slate-400" />
            )}
        </div>
        <div className="space-y-2">
            <Button variant="outline" className="rounded-xl">
            Upload Logo
            </Button>
            <p className="text-xs text-slate-500">
            PNG, JPG up to 2MB. Recommended: 200x200px
            </p>
        </div>
    </div>
  )
}

export default LogoUploader