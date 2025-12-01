# Droxi assinment - Smart Inbox for clinicians

## Planning

We will have for this project using main inbox component, that will be split to 2 sections:
- header section - will store placeholder of dropdown 'By Date', sync duration (hardcoded)
- body section - will store list of requests for the clinical

inbox component will contain **'prescription request'** component for representing each request (each card in the list)


## prescriptionRequests component

will be divided to 3 parts:
- header section: will contain icon, sender name, timestamp
- body section: will contain message content
- footer section: will contain sync duration (hardcoded), labels, and dr. name to address it

* each data on footer will contain relevant icon (will be typed later)
* type of request in header will have an icon as well




- `request.controller.ts` – Handles incoming HTTP requests related to prescription data.
- `request.interface.ts` – Defines TypeScript interfaces for request data structures.
- `request.service.ts` – Contains the business logic for processing prescription requests.
- `models/dummy1.model.ts` – `request` array - Provides a sample prescription request for demonstration purposes.

