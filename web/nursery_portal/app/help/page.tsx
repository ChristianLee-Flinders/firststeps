'use client';
import ArticleList from "@/components/help/articleList";
import ArticleViewer from "@/components/help/articleViewer";
import HelpBackButton from "@/components/help/backButton";
import HelpHeader from "@/components/help/header";
import CatagoriesSection, { HelpCategory } from "@/components/help/catagoriesSection";
import { articles } from "@/lib/helpArticles";
import { AnimatePresence, motion } from "framer-motion";
import { CreditCard, Puzzle, Rocket, Sparkles, User, Wrench } from "lucide-react";
import { useMemo, useState } from "react";

export const categories: HelpCategory[] = [
  { id: 'getting_started', icon: Rocket, title: 'Getting Started', description: 'Learn the basics and set up your account' },
  { id: 'billing', icon: CreditCard, title: 'Billing & Plans', description: 'Manage subscriptions, invoices, and payments' },
  { id: 'account', icon: User, title: 'Account Settings', description: 'Profile, security, and preferences' },
  { id: 'features', icon: Sparkles, title: 'Features', description: 'Detailed guides on all features' },
  { id: 'troubleshooting', icon: Wrench, title: 'Troubleshooting', description: 'Common issues and solutions' },
  { id: 'integrations', icon: Puzzle, title: 'Integrations', description: 'Connect with third-party apps' },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const showBackButton = Boolean(selectedCategory || selectedArticle || searchQuery);

  const filteredArticles = useMemo(() => {
    if (!searchQuery && !selectedCategory) return [];
    
    return articles.filter(article => {
      const matchesSearch = searchQuery
        ? article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (article.summary && article.summary.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      const matchesCategory = selectedCategory
        ? article.category === selectedCategory
        : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const articleCountByCategory = useMemo(() => {
    return articles.reduce((acc, a) => {
      acc[a.category] = (acc[a.category] ?? 0) + 1
      return acc
    }, {} as Record<string, number>)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <HelpHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
        setSelectedArticle={setSelectedArticle}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <AnimatePresence mode="wait">
          {/* Back Button */}
          {showBackButton && (
            <HelpBackButton 
              selectedArticle={selectedArticle} 
              selectedCategory={selectedCategory} 
              setSelectedArticle={setSelectedArticle} 
              setSelectedCategory={setSelectedCategory} 
              setSearchQuery={setSearchQuery} 
            />
          )}

          {/* Article View */}
          {selectedArticle ? (
            <ArticleViewer article={selectedArticle} onBack={() => setSelectedArticle(null)} />
          ) : searchQuery || selectedCategory ?(
            /* Search Results or Category Articles */
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
              <h2 className="text-xl font-semibold text-foreground mb-6">
                {searchQuery 
                  ? `Search results for "${searchQuery}"`
                  : categories.find(c => c.id === selectedCategory)?.title
                }
              </h2>
              <ArticleList articles={filteredArticles} onSelectArticle={setSelectedArticle} />
            </motion.div>
          ) : (
            /* Default View - Categories, FAQ, Contact */
            <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-16" >
              <CatagoriesSection
                categories={categories}
                articleCountByCategory={articleCountByCategory}
                setSelectedCategory={setSelectedCategory}
              />

              {/* you can add FAQ, contact or other default sections here */}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}