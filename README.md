# Sales Insights Dashboard Automation

<img width="1918" height="1078" alt="屏幕截图 2025-09-05 173126" src="https://github.com/user-attachments/assets/b6d42ef4-89b6-4b6e-a7f5-b211794e480b" />

Full-stack project that automates the transformation of spreadsheets into interactive sales dashboards using n8n, PostgreSQL, Redis, Next.js, Prisma, and TypeScript.

This project demonstrates end-to-end skills in automation, data engineering, and modern frontend development. It’s built to showcase how raw business data can be turned into usable insights with scalable architecture and clean UI.

## 💡 What This Project Demonstrates

Automation Engineering → Used n8n to design a workflow that ingests spreadsheets and pipes structured data into a database.

Backend Development → Designed data models with Postgres and caching with Redis, managed via Prisma ORM.

Frontend Development → Built an interactive Next.js dashboard with TypeScript and styled using Shadcn UI.

System Design → Combined multiple services into a local stack, showing how automation, storage, and UI can integrate seamlessly.

## 🛠️ Tech Stack

Automation: n8n

Database: PostgreSQL, Redis

ORM: Prisma

Frontend: Next.js, TypeScript, Shadcn UI

Hosting: Local environment (Docker/Manual setup)

## 📊 Project Workflow

Upload Spreadsheet → n8n parses CSV/Excel files.

Data Processing → Records stored in Postgres, cached in Redis.

Dashboard Visualization → Next.js frontend fetches data via Prisma and renders interactive sales dashboards.

## 🚀 Setup (Local)
```bash
# Clone repo
git clone https://github.com/yourusername/sales-insights-dashboard.git
cd sales-insights-dashboard
```
## Backend:
```bash
# Configure Postgres & Redis in .env
DATABASE_URL="postgresql://user:password@localhost:5432/salesdb"
REDIS_URL="redis://localhost:6379"

# Run Prisma migrations
npx prisma migrate dev
```
## Frontend:
```bash
cd frontend
npm install
npm run dev
```
Visit → http://localhost:3000
