import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

const categoryLabels = {
  getting_started: 'Getting Started',
  billing: 'Billing',
  account: 'Account',
  features: 'Features',
  troubleshooting: 'Troubleshooting',
  integrations: 'Integrations'
};

type categoryLabelsType = keyof typeof categoryLabels;

interface ArticleViewerProps {
  article: {
    category: categoryLabelsType;
    created_date?: string;
    title: string;
    summary?: string;
    content: string;
  };
  onBack: () => void;
}

export default function ArticleViewer({ article, onBack }: ArticleViewerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full"
    >
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to articles
      </Button>
      
      <article className="bg-card border border-border rounded-2xl p-6 sm:p-8">
        <header className="mb-6 pb-6 border-b border-border">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary" className="font-normal">
              <Tag className="h-3 w-3 mr-1" />
              {categoryLabels[article.category] || article.category}
            </Badge>
            {article.created_date && (
              <span className="text-sm text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {format(new Date(article.created_date), 'MMM d, yyyy')}
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{article.title}</h1>
          {article.summary && (
            <p className="text-muted-foreground mt-3 text-lg">{article.summary}</p>
          )}
        </header>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-2xl font-bold mt-8 mb-4 text-foreground">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-semibold mt-6 mb-3 text-foreground">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-medium mt-4 mb-2 text-foreground">{children}</h3>,
              p: ({ children }) => <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="mb-4 ml-6 list-disc text-muted-foreground">{children}</ul>,
              ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal text-muted-foreground">{children}</ol>,
              li: ({ children }) => <li className="mb-1">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  {children}
                </blockquote>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
}