'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

type HelpBackButtonProps = {
  selectedCategory?: string | null
  selectedArticle?: any | null
  setSelectedCategory: (id: string | null) => void
  setSelectedArticle: (a: any | null) => void
  setSearchQuery: (value: string) => void
  className?: string
}

export default function HelpBackButton({
  selectedCategory,
  selectedArticle,
  setSelectedCategory,
  setSelectedArticle,
  setSearchQuery,
  className,
}: HelpBackButtonProps) {
    
  const handleBack = () => {
    if (selectedArticle) {
      setSelectedArticle(null)
    } else if (selectedCategory) {
      setSelectedCategory(null)
    }
    setSearchQuery('')
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={['mb-6', className].filter(Boolean).join(' ')}>
      <Button variant="ghost" onClick={handleBack} className="-ml-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
    </motion.div>
  )
}