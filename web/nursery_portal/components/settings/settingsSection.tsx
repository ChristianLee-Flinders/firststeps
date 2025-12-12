import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export default function SettingsSection({ title, description, children, actions }: SettingsSectionProps) {
  return (
    <Card className="rounded-2xl border-slate-100 shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          {description && <CardDescription className="mt-1">{description}</CardDescription>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}