# Droxi assinment - Smart Inbox for clinicians - Bar Peretz
(put changes.md in readme.md as well for you seeing that on GitHub with more convenient way)

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
* the component will use a shared UI component (Card component)

## Flow
1 App-component will called to inbox-component

2 Inbox component will generate main layout of smart box and will handle services:
- iconService - for handling icons and inject them in components (using material icons)
- inboxService - will handle REST calls to BE in order to get data of requests.

3 since in inboxComponent we stored the data of array of requests, the component will iterate
using @for for each request, and will inject prescriptionRequest component with relevant data.
- prescriptionRequest called shared-ui Card component, and pass the data as well to it.

## steps of working:
1) creating placeholders components (inbox component, prescriptionRequest component, shared ui)
2) set up css of inbox itself, size color etc
3) add support of inserting icons using iconService
4) inject icons in header, footer and body
5) using mock data for the requests in order to align css, html etc
6) replace mock data with real data from inboxService (REST calls to BE)

## Future improvements:
- FIRST, moving to responsive units (I would create a method for translate px to rem, and by
  that we can still see px value {as an argument} + getting rem value with the responsive behavior).
- Creating shared component of 'ellipse-text' in order to wrap long text with '...' at the end
  (with depend on size of text), + tooltip for hovering long text for use
- adding support of logic of header's buttons (dropdown 'by date', sync button, sorting by order)
- adding UT's for handling signals computations,


==============================

# Smart Inbox – Backend & Frontend Task

## Overview

This project aims to implement a **Smart Inbox** feature for clinicians. The inbox will display **prescription requests** submitted for patients, enabling clinicians to manage and review them efficiently.

## Project Structure

The repository includes both backend and frontend components:

### Backend (Node.js with TypeScript)

The backend is a Node.js server written in TypeScript. It includes the following key components:

- `request.controller.ts` – Handles incoming HTTP requests related to prescription data.
- `request.interface.ts` – Defines TypeScript interfaces for request data structures.
- `request.service.ts` – Contains the business logic for processing prescription requests.
- `models/dummy1.model.ts` – `request` array - Provides a sample prescription request for demonstration purposes.

### Frontend (Angular)

The frontend is a basic Angular project that displays prescription requests in an inbox-style UI.

## Assignment

Your task is to implement the following:

1. **Backend Integration**
  - Use the `request` of `RenewalRequest` interface from
  `fullstack/BE/src/models/dummy1.model.ts`
- Extend the existing dummy JSON with additional data to ensure the frontend view requires vertical scrolling.
- Expose this data via an API endpoint for the frontend to fetch.

2. **Frontend Display**
   Render the list of prescription and message requests in the frontend, following the layout provided in the reference image.

   ![Inbox UI Notes](/fullstack/FE/inbox.png)

- Restrict the app display area to `409 × 524` pixels (can be placed center, left, or right).
- Use the `FE` folder Angular project.
- Display a **scrollable vertical list** of requests/messages.

Each list item should include:
- Sender Name
- Timestamp in format `HH:mm DD/MM/YYYY`
- Sync Duration (e.g., "1 min.", "5 sec.") – hardcoded
- Type-based Icon (e.g., lab, text, prescription):
   -  "type": "labReport" - icon_labs.svg
   -  "type": "renewal"  - medicine.svg
   -  "type": "freeText" - message.svg
- Message Content

> **Note:** Match the reference image layout and formatting as closely as possible.



![Inbox UI Example](/fullstack/FE/inbox-notes.png)


**Additional Guidelines:**
- Organize UI using Angular components.
- Use CSS for styling.
- Icons: Use **Font Awesome**, **Angular Material**, or local `assets/icons` folder.
  Replace unavailable icons with alternatives—don’t spend too much time sourcing exact matches.



3. **Documenation**
   Document your approach and any assumptions made during implementation by creating CHANGES.md file.


## Notes

- Focus on clean, maintainable, and production-quality code.
