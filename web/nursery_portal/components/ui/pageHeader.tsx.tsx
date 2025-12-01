import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: () => void;
  actionLabel?: string;
  actionIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
}

export default function PageHeader({ 
    title,
    description,
    action,
    actionLabel,
    actionIcon: ActionIcon,
    children
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800">{title}</h1>
        {description && (
          <p className="text-slate-500 mt-1">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        {children}
        {action && (
          <Button 
            onClick={action}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl shadow-lg shadow-emerald-200/50 transition-all hover:shadow-xl hover:shadow-emerald-200/50"
          >
            {ActionIcon && <ActionIcon className="w-4 h-4 mr-2" />}
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}