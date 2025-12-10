import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';

interface ArticleListProps {
  articles: Array<{
    id: string;
    title: string;
    summary?: string;
  }>;
  onSelectArticle: (article: { id: string; title: string; summary?: string }) => void;
}

export default function ArticleList({ articles, onSelectArticle }: ArticleListProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
        <p className="text-muted-foreground">No articles found</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {articles.map((article, index) => (
        <motion.button
          key={article.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelectArticle(article)}
          className="w-full p-4 bg-card border border-border rounded-xl text-left transition-all duration-200 hover:bg-secondary/50 hover:border-primary/20 group flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <div>
              <h4 className="font-medium text-foreground">{article.title}</h4>
              {article.summary && (
                <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">{article.summary}</p>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
        </motion.button>
      ))}
    </div>
  );
}