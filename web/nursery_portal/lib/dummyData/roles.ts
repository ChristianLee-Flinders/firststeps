export interface Permission {
  view?: boolean
  create?: boolean
  edit?: boolean
  delete?: boolean
}

export interface SettingsPermission {
  view?: boolean
  edit?: boolean
}

export interface Permissions {
  children?: Permission
  staff?: Permission
  attendance?: Permission
  learning_logs?: Permission
  finance?: Permission
  settings?: SettingsPermission
  users?: Permission
  nurseries?: Permission
}

export interface Role {
  id?: string
  name: string
  description?: string
  organisation_id?: string
  permissions?: Permissions
  is_system_role?: boolean
}

export const dummyRoles: Role[] = [
  {
    id: 'role-1',
    name: 'Administrator',
    description: 'Full access to all features and settings',
    organisation_id: 'org-1',
    permissions: {
      children: { view: true, create: true, edit: true, delete: true },
      staff: { view: true, create: true, edit: true, delete: true },
      attendance: { view: true, create: true, edit: true, delete: true },
      learning_logs: { view: true, create: true, edit: true, delete: true },
      finance: { view: true, create: true, edit: true, delete: true },
      settings: { view: true, edit: true },
      users: { view: true, create: true, edit: true, delete: true },
      nurseries: { view: true, create: true, edit: true, delete: true },
    },
    is_system_role: true,
  },
  {
    id: 'role-2',
    name: 'Practitioner',
    description: 'Can view and manage children, attendance and learning logs',
    organisation_id: 'org-1',
    permissions: {
      children: { view: true, create: false, edit: false, delete: false },
      staff: { view: true, create: false, edit: false, delete: false },
      attendance: { view: true, create: true, edit: true, delete: false },
      learning_logs: { view: true, create: true, edit: true, delete: false },
      finance: { view: false, create: false, edit: false, delete: false },
      settings: { view: false, edit: false },
      users: { view: false, create: false, edit: false, delete: false },
      nurseries: { view: true, create: false, edit: false, delete: false },
    },
    is_system_role: true,
  },
  {
    id: 'role-3',
    name: 'Finance Manager',
    description: 'Can manage finance and billing information',
    organisation_id: 'org-1',
    permissions: {
      children: { view: true, create: false, edit: false, delete: false },
      staff: { view: true, create: false, edit: false, delete: false },
      attendance: { view: true, create: false, edit: false, delete: false },
      learning_logs: { view: false, create: false, edit: false, delete: false },
      finance: { view: true, create: true, edit: true, delete: false },
      settings: { view: true, edit: false },
      users: { view: false, create: false, edit: false, delete: false },
      nurseries: { view: true, create: false, edit: false, delete: false },
    },
    is_system_role: false,
  },
]