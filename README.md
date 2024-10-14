# @apps Folder Documentation

The `@apps` folder is a central component of the Entire monorepo, orchestrating various applications and services that collectively power the Entire ecosystem. This documentation provides an in-depth overview of each subfolder within `@apps`, detailing their primary functions, key subfolders, and their contributions to the overall system.

**Note**: This documentation was built as a way to understand the codebase and is not exhaustive. It could be wrong or incomplete in *some* places. If you want to contribute to this documentation, please feel free to send me a message on slack or open a PR.

## Hierarchical Structure
@apps
├── journey
│ ├── journey-bff
│ ├── journey-api-test
│ ├── journey-type
│ ├── journey-e2e
│ ├── journey-dmn-unit-test
│ └── journey-nfr
├── user-management
│ ├── user-bff
│ ├── user-api-test
│ ├── user-type
│ ├── user-e2e
│ ├── user-dmn-unit-test
│ └── user-nfr
├── analytics
│ ├── analytics-bff
│ ├── analytics-api-test
│ ├── analytics-type
│ ├── analytics-e2e
│ ├── analytics-dmn-unit-test
│ └── analytics-nfr
├── notifications
│ ├── notifications-bff
│ ├── notifications-api-test
│ ├── notifications-type
│ ├── notifications-e2e
│ ├── notifications-dmn-unit-test
│ └── notifications-nfr
└── api-gateway
├── api-gateway-bff
├── api-gateway-api-test
├── api-gateway-type
├── api-gateway-e2e
├── api-gateway-dmn-unit-test
└── api-gateway-nfr


## Subfolder Details

### Tags

- 🧑‍💻 **Frontend Developers**
- 🛠️ **Backend Developers**
- 🧪 **QA Engineers**

### 1. `journey` 🧑‍💻🛠️🧪

The `journey` folder encapsulates the frontend application responsible for managing and displaying journey-related features within the Entire ecosystem. It comprises multiple subdirectories that handle components, state management, services, testing, and utilities to deliver a seamless user experience.

#### Subdirectories

- **components** 🧑‍💻
- **redux** 🧑‍💻🛠️
- **services** 🛠️
- **specs** 🧪
- **utils** 🧑‍💻🛠️

---

#### **components** 🧑‍💻

Contains all React components that form the user interface of the Journey application.

**Key Responsibilities:**

- **UI Components**: Building reusable UI elements such as dialogs, layouts, and wizards.
- **Admin Components**: Specialized components for administrative functionalities like feedback dialogs, data tables, and search interfaces.

**Notable Files/Folders:**

- `JourneyPage.tsx`: Main page component for journey management.
- `ErrorBoundary.tsx`: Error handling component to catch and display errors gracefully.
- `AdminSidebar.tsx`: Sidebar component for admin navigation.
- `Wizard.tsx`: Multi-step wizard component for guided user interactions.

---

#### **redux** 🧑‍💻🛠️

Manages the application's state using Redux.

**Key Responsibilities:**

- **State Management**: Centralizing application state for consistent data flow.
- **Middleware**: Handling asynchronous actions and side effects.
- **Services Integration**: Connecting Redux slices with backend APIs.

**Notable Files/Folders:**

- `store.ts`: Configures the Redux store with middleware and reducers.
- `slices/`: Contains Redux slices for different state domains like `admin`, `journey`, and `user`.

---

#### **services** 🛠️

Handles integrations with external services and APIs.

**Key Responsibilities:**

- **Contentful Integration**: Manages content delivery and updates via Contentful.
- **API Services**: Abstracts API calls for various backend services.

**Notable Files/Folders:**

- `contentful.service.ts`: Service for interacting with Contentful APIs.
- `index.ts`: Entry point for aggregating all service modules.

---

#### **specs** 🧪

Contains test configurations and utilities for the Journey application.

**Key Responsibilities:**

- **Testing Utilities**: Mocking styles and providing test utilities for component testing.
- **Global Tests**: Setting up global test configurations and helpers.

**Notable Files/Folders:**

- `test-utils.tsx`: Utility functions for rendering components in tests.
- `style-mock.js`: Mocking styles during testing to avoid CSS-related errors.

---

#### **utils** 🧑‍💻🛠️

Provides utility functions and constants used throughout the application.

**Key Responsibilities:**

- **Data Formatting**: Functions for formatting dates, currencies, and other data types.
- **Common Utilities**: Shared helper functions for various tasks like text manipulation and environment configuration.
- **Constants**: Centralized constants for consistent usage across the application.

**Notable Files/Folders:**

- `formatter.util.ts`: Utility for formatting data.
- `constants/`: Defines various constants used in the application.

---

#### **Other Configuration Files** 🛠️🧑‍💻🧪

- `Dockerfile`: Configuration for containerizing the Journey application.
- `sentry.*.config.js`: Configuration files for Sentry error tracking.
- `tailwind.config.js`: Tailwind CSS configuration for styling.
- `tsconfig.json`: TypeScript configuration for the application.
- `tsconfig.spec.json`: TypeScript configuration for tests.

---

### 2. `journey-bff` 🛠️🧑‍💻🧪

The `journey-bff` (Backend for Frontend) folder contains the backend services tailored specifically for the Journey frontend application. It serves as an intermediary between the frontend and various backend microservices, handling API aggregations, data transformations, and business logic.

#### Subdirectories

- **controllers** 🛠️
- **dtos** 🛠️
- **migrations** 🛠️
- **services** 🛠️
- **workers** 🛠️

---

#### **controllers** 🛠️

Handles incoming API requests from the frontend and delegates them to appropriate services.

**Key Responsibilities:**

- **Request Handling**: Managing HTTP requests and sending responses.
- **API Endpoints**: Defining RESTful endpoints for journey-related operations.

**Notable Files/Folders:**

- `payments.controller.ts`: Manages payment-related API requests.
- `simulation.controller.ts`: Handles simulation-related API interactions.

---

#### **dtos** 🛠️

Defines Data Transfer Objects (DTOs) for validating and structuring data between the frontend and backend.

**Key Responsibilities:**

- **Data Validation**: Ensuring incoming data meets required formats and constraints.
- **Type Definitions**: Structuring data for consistency across services.

**Notable Files/Folders:**

- `decision-metric-income.dto.ts`: DTO for income-related metrics in decisions.
- `unutilised-limit-event.dto.ts`: DTO for unutilised limit events.

---

#### **migrations** 🛠️

Contains database migration scripts to manage schema changes over time.

**Key Responsibilities:**

- **Schema Management**: Applying and tracking changes to the database schema.
- **Version Control**: Ensuring database changes are versioned and reproducible.

**Notable Files/Folders:**

- `20240605031720_add_variations_admin_role_to_internal_spoke/migration.sql`: Migration script for adding admin roles.
- `schema.prisma`: Prisma schema file defining the database models.

---

#### **services** 🛠️

Implements the core business logic and interacts with the database and external services.

**Key Responsibilities:**

- **Business Logic**: Handling the core functionalities and rules of the application.
- **Database Operations**: Managing CRUD operations and complex queries.
- **External Integrations**: Communicating with other microservices and third-party APIs.

**Notable Files/Folders:**

- `payments.service.ts`: Business logic for managing payments.
- `quote.service.ts`: Handles quote-related operations.

---

#### **workers** 🛠️

Manages background jobs and asynchronous tasks.

**Key Responsibilities:**

- **Task Processing**: Handling long-running tasks without blocking the main application flow.
- **Job Management**: Scheduling and monitoring background jobs.

**Notable Files/Folders:**

- `disbursal.worker.ts`: Manages disbursal background tasks.
- `payments.worker.ts`: Handles payment processing asynchronously.

---

#### **Other Configuration Files** 🛠️

- `Dockerfile`: Configuration for containerizing the Journey BFF service.
- `tsconfig.json`: TypeScript configuration for the backend service.
- `package.json`: Manages dependencies and scripts for the BFF service.

---

## Summary

The `@apps` folder is meticulously organized to encapsulate the frontend (`@journey`) and backend (`@journey-bff`) applications that constitute the Entire ecosystem. 

- **`@journey`** focuses on delivering a rich user interface and managing client-side state and interactions. It leverages React for component-based UI development, Redux for state management, and integrates with external services like Contentful for content management. Comprehensive testing ensures reliability, while utilities and constants promote code reuse and consistency.

- **`@journey-bff`** serves as the backend for the frontend application, handling API requests, business logic, and data persistence. It ensures efficient communication between the frontend and various backend services, manages database migrations, and handles asynchronous tasks through workers. Robust DTOs and controllers maintain data integrity and service reliability.

This modular structure promotes scalability, maintainability, and clear separation of concerns, enabling efficient development and robust performance across the Entire platform.

## Further Enhancements

To further enrich this documentation, consider the following additions:

- **Architecture Diagrams**: Visual representations of how the frontend and backend interact within the monorepo.
- **Workflow Examples**: Step-by-step scenarios demonstrating how frontend components interact with backend services for specific features.
- **Detailed API References**: Comprehensive documentation of APIs exposed by the `journey-bff` service.
- **Contribution Guidelines**: Best practices and standards for contributing to each subfolder, ensuring consistency and quality across the codebase.

## Contact

For any questions or further assistance regarding the `@apps` folder documentation, please reach out to the development team at [devteam@Entire.com](mailto:devteam@Entire.com).

## Appendix

### Glossary

- **Monorepo**: A single repository that houses multiple projects or applications.
- **BFF (Backend for Frontend)**: A design pattern that creates dedicated backend services tailored to the needs of specific frontend applications.
- **DTO (Data Transfer Object)**: An object that carries data between processes to reduce the number of method calls.
- **Prisma**: An open-source ORM for Node.js and TypeScript.
- **Sentry**: An error tracking tool that helps developers monitor and fix crashes in real-time.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Redux**: A predictable state container for JavaScript apps, commonly used with React.

### References

- [Nx Documentation](https://nx.dev/)
- [Monorepo Best Practices](https://monorepo.tools/)
- [BFF Pattern](https://martinfowler.com/articles/bff.html)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Sentry Documentation](https://docs.sentry.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Redux Documentation](https://redux.js.org/)

## Revision History

| Version | Date       | Description                          | Author             |
|---------|------------|--------------------------------------|--------------------|
| 1.0     | 2024-10-14 | Initial documentation for beginners | ChatGPT-4 Assisted |

# End of Document