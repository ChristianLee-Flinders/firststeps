'use client'
import SearchBar from './searchBar'
import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'

type HelpHeaderProps = {
  searchQuery: string
  setSearchQuery: (value: string) => void
  setSelectedCategory: (id: string | null) => void
  setSelectedArticle: (a: any | null) => void
}

export default function HelpHeader({
  searchQuery,
  setSearchQuery,
  setSelectedCategory,
  setSelectedArticle,
}: HelpHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            How can we help?
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Search our knowledge base or browse categories below
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <SearchBar
            value={searchQuery}
            onChange={(value: string) => {
              setSearchQuery(value)
              setSelectedCategory(null)
              setSelectedArticle(null)
            }}
          />
        </motion.div>
      </div>
    </header>
  )
}