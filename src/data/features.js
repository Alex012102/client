const features = [
  ({
    title: "Tenant Profiles",
    icon: "/icons/tenant-profiles.svg",
    text: "Store and manage tenant information such as lease agreements, contact details, and payment history.",
  },
  {
    title: "Lease Management",
    icon: "/icons/lease-management.svg",
    text: "Track lease start/end dates, renewals, and expirations, and automate notifications for lease expirations.",
  },
  {
    title: "Online Applications",
    icon: "/icons/online-applications.svg",
    text: "Allow prospective tenants to apply for rental units online, including background checks and application reviews.",
  },
  {
    title: "Online Rent Payments",
    icon: "/icons/online-rent-payments.svg",
    text: "Enable tenants to pay rent and fees online through multiple payment methods (bank transfers, credit cards).",
  },
  {
    title: "Automated Billing",
    icon: "/icons/automated-billing.svg",
    text: "Automatically generate and send invoices for rent, utilities, or late fees.",
  },
  {
    title: "Payment Tracking",
    icon: "/icons/payment-tracking.svg",
    text: "Keep a record of received payments, missed payments, and balances owed, with reports on financial data.",
  },
  {
    title: "Maintenance Requests",
    icon: "/icons/maintenance-requests.svg",
    text: "Tenants can submit repair and maintenance requests directly through the app.",
  },
  {
    title: "Work Order Management",
    icon: "/icons/work-order-management.svg",
    text: "Track maintenance requests from creation to completion, assign tasks to vendors or internal staff, and update tenants on progress.",
  },
  {
    title: "Vendor Management",
    icon: "/icons/vendor-management.svg",
    text: "Store vendor contact details, assign maintenance jobs, and track vendor invoices.",
  },
  {
    title: "Lease & Document Storage",
    icon: "/icons/document-storage.svg",
    text: "Secure storage for leases, agreements, and important documents, easily accessible by property managers and tenants.",
  },
  {
    title: "E-signatures",
    icon: "/icons/e-signatures.svg",
    text: "Allow digital signing of leases, maintenance agreements, or other contracts within the platform.",
  },
  {
    title: "Receipts and Invoice Management",
    icon: "/icons/receipts-invoices.svg",
    text: "Track and manage receipts, bills, and invoices for all property-related expenses.",
  },
  {
    title: "Move-in/Move-out Scheduling",
    icon: "/icons/scheduling.svg",
    text: "Manage and schedule tenant move-ins, move-outs, and inspections with automated reminders.",
  },
  {
    title: "Event Calendar",
    icon: "/icons/event-calendar.svg",
    text: "Track property inspections, maintenance tasks, lease renewals, and other key events.",
  },
  {
    title: "Vendor Appointments",
    icon: "/icons/vendor-appointments.svg",
    text: "Schedule appointments with vendors for maintenance and repairs, visible to both landlords and tenants.",
  },
  {
    title: "Income & Expense Tracking",
    icon: "/icons/income-expense.svg",
    text: "Generate reports on rental income, expenses, maintenance costs, and overall profitability for each property.",
  },
  {
    title: "Tax Reporting",
    icon: "/icons/tax-reporting.svg",
    text: "Generate tax-related documents, including expense reports, depreciation, and other accounting data.",
  },
  {
    title: "Budgeting",
    icon: "/icons/budgeting.svg",
    text: "Track spending against budgeted amounts for maintenance, utilities, and other property-related expenses.",
  },
  {
    title: "Message Center",
    icon: "/icons/message-center.svg",
    text: "A centralized place to send and receive messages from tenants regarding maintenance, rent issues, or general inquiries.",
  },
  {
    title: "Automated Notifications",
    icon: "/icons/automated-notifications.svg",
    text: "Send automated reminders for rent due dates, lease renewals, maintenance appointments, and more.",
  },
  {
    title: "Bulk Messaging",
    icon: "/icons/bulk-messaging.svg",
    text: "Send announcements or updates to all tenants, like policy changes or emergency alerts.",
  },
  {
    title: "Vacancy Listings",
    icon: "/icons/vacancy-listings.svg",
    text: "List available rental units on the app or syndicate them to external platforms like Zillow or Craigslist.",
  },
  {
    title: "Automated Vacancy Alerts",
    icon: "/icons/vacancy-alerts.svg",
    text: "Notify prospective tenants when a unit matching their criteria becomes available.",
  },
  {
    title: "Virtual Tours",
    icon: "/icons/virtual-tours.svg",
    text: "Offer potential tenants virtual property tours via the app.",
  },
  {
    title: "Credit and Background Checks",
    icon: "/icons/credit-background-checks.svg",
    text: "Perform credit checks, background screenings, and rental history checks on applicants.",
  },
  {
    title: "Application Scoring",
    icon: "/icons/application-scoring.svg",
    text: "Automatically score and rank prospective tenants based on screening results and customizable criteria.",
  },
  {
    title: "Lease Expiration Alerts",
    icon: "/icons/lease-expiration.svg",
    text: "Notify landlords and tenants of upcoming lease expirations.",
  },
  {
    title: "Maintenance Due",
    icon: "/icons/maintenance-due.svg",
    text: "Remind tenants and landlords about scheduled maintenance or inspections.",
  },
  {
    title: "Payment Due Reminders",
    icon: "/icons/payment-due-reminders.svg",
    text: "Notify tenants of upcoming rent due dates or overdue balances.",
  }),
];

const keyFeatures = [
  {
    title: "Tenant & Lease Management",
    icon: "person-lines-fill",
    text: "Manage tenant profiles, lease agreements, and track key dates like lease start, end, renewals, and expirations.",
    featured: true,
  },
  {
    title: "Rent Collection & Payments",
    icon: "archive-fill",
    text: "Enable online rent payments, automate billing and track payments with reports on financial data.",
    featured: true,
  },
  {
    title: "Property Maintenance",
    icon: "wrench-adjustable-circle-fill",
    text: "Submit and manage maintenance requests, assign work orders, and keep tenants updated on progress.",
    featured: true,
  },
  {
    title: "Invoice & Receipt Management",
    icon: "receipt",
    text: "Securely store documents, track invoices, and manage receipts for property-related expenses.",
    featured: true,
  },
  {
    title: "Financial Reporting & Accounting",
    icon: "file-break-fill",
    text: "Track income, expenses, generate tax reports, and budget for maintenance and utilities.",
    featured: true,
  },
  {
    title: "Communication & Notifications",
    icon: "chat-left-dots-fill",
    text: "Send automated reminders, communicate with tenants via a centralized message center, and bulk messaging for announcements.",
    featured: true,
  },
  {
    title: "Property Listing & Tenant Screening",
    icon: "person-badge-fill",
    text: "List vacancies, perform tenant screenings, and allow online applications with credit and background checks.",
    featured: true,
  },
  {
    title: "Scheduling & Calendar Management",
    icon: "calendar-event-fill",
    text: "Schedule move-ins/outs, inspections, and manage appointments with vendors.",
    featured: true,
  },
];

export default keyFeatures;
