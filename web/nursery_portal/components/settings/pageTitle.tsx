
interface SettingsPageTitleProps {
  title: string
  description: string
}

function SettingsPageTitle({title, description}: SettingsPageTitleProps) {
  return (
    <div>
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        <p className="text-slate-500 mt-1">{description}</p>
    </div>
  )
}

export default SettingsPageTitle