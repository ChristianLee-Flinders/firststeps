import React from 'react'
import { motion } from 'framer-motion'
import CategoryCard from './categoryCard'

export type HelpCategory = {
  id: string
  icon: React.ComponentType<any>
  title: string
  description: string
}

type CatagoriesSectionProps = {
  categories: HelpCategory[]
  articleCountByCategory: Record<string, number>
  setSelectedCategory: (id: string | null) => void
  className?: string
}

export default function CatagoriesSection({
  categories,
  articleCountByCategory,
  setSelectedCategory,
  className,
}: CatagoriesSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-xl font-semibold text-foreground mb-6">Browse by topic</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <CategoryCard
              icon={category.icon}
              title={category.title}
              description={category.description}
              articleCount={articleCountByCategory[category.id] || 0}
              onClick={() => setSelectedCategory(category.id)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}