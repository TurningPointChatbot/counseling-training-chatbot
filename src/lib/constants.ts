export class AdminRoutes {
  static Root = '/admin';
  static Dashboard = AdminRoutes.Root + '/dashboard';
  static Counsellors = AdminRoutes.Root + '/counsellors';
  static Modules = AdminRoutes.Root + '/modules';
  static EmployeeDetails = AdminRoutes.Root + 'employee-details/{employeeId}';
  static ModuleDetails = AdminRoutes.Root + 'module-details/{moduleId}';
}

export class CounsellorRoutes {
  static Root = '/counsellor';
  static Dashboard = CounsellorRoutes.Root + '/dashboard';
  static TrainingModules = CounsellorRoutes.Root + '/modules';
}
