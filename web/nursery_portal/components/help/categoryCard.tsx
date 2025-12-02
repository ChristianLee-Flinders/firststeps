import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  articleCount: number;
  onClick: () => void;
}

export default function CategoryCard({ icon: Icon, title, description, articleCount, onClick }: CategoryCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full p-6 bg-card cursor-pointer border border-border rounded-2xl text-left transition-all duration-200 hover:shadow-lg hover:border-primary/20 group"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-100 rounded-xl from-emerald-500 to-teal-500">
            <Icon className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{description}</p>
            <span className="text-xs text-muted-foreground">{articleCount} articles</span>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
      </div>
    </motion.button>
  );
}