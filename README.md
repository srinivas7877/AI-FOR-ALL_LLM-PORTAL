# Edu-Smart-Connect

A modern e-learning platform with AI-powered features.

## Prerequisites

Before running this project locally, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

**Note:** This project uses SQLite as the database, so no separate database server installation is required!

## Local Setup Instructions

### 1. Install Dependencies

**Important for Windows Users:** `better-sqlite3` requires native compilation. You need to install Visual Studio Build Tools first.

#### Windows Setup (Required for better-sqlite3)

1. **Install Visual Studio Build Tools** (choose one option):

   **Option A: Quick Install (Recommended)**
   - Download and install: [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022)
   - During installation, select "Desktop development with C++" workload
   - Restart your terminal after installation

   **Option B: Install via winget** (if you have winget):
   ```powershell
   winget install Microsoft.VisualStudio.2022.BuildTools --override "--quiet --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"
   ```

2. **After installing Build Tools**, install dependencies:

```powershell
cd Edu-Smart-Connect
npm install
```

**For Mac/Linux users**, just run:
```bash
cd Edu-Smart-Connect
npm install
```

### 2. Configure Environment Variables

SQLite database will be created automatically. No database setup required!

1. Copy the example environment file:

```bash
copy .env.example .env
```

On Mac/Linux:
```bash
cp .env.example .env
```

2. The `.env` file should contain:

```env
DATABASE_URL=./database.sqlite
PORT=5000
NODE_ENV=development
SESSION_SECRET=your-session-secret-key-change-this-in-production
```

**Note:** The `DATABASE_URL` points to a SQLite database file. The file will be created automatically when you run the migrations. You can use any file path you prefer, or keep the default `./database.sqlite`.

### 3. Set Up Database Schema

Run the database migrations to create the necessary tables:

```bash
npm run db:push
```

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:
- **Frontend & Backend**: http://localhost:5000

## Available Scripts

- `npm run dev` - Start the development server (both frontend and backend)
- `npm run dev:client` - Start only the frontend development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server (requires build first)
- `npm run check` - Type-check the TypeScript code
- `npm run db:push` - Push database schema changes to SQLite database

## Project Structure

```
Edu-Smart-Connect/
├── client/          # React frontend (Vite)
│   └── src/
│       ├── components/  # React components
│       ├── pages/       # Page components
│       └── ...
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API routes
│   └── ...
├── shared/          # Shared code between client and server
│   └── schema.ts    # Database schema (Drizzle ORM)
└── ...
```

## Troubleshooting

### Installation Issues (Windows)

#### "Could not find any Visual Studio installation to use"

This error occurs because `better-sqlite3` requires native compilation. 

**Solution:**
1. Install Visual Studio Build Tools (see Step 1 in setup instructions above)
2. Make sure to select "Desktop development with C++" workload during installation
3. Restart your terminal/PowerShell after installation
4. Run `npm install` again

**Alternative Quick Fix (if Build Tools installation fails):**
You can try installing just the build essentials:
```powershell
npm install --global windows-build-tools
```
However, Visual Studio Build Tools is the recommended and more reliable solution.

### Database File Issues

If you encounter database-related errors:

1. **Database file not found:**
   - The database file will be created automatically when you run `npm run db:push`
   - Make sure the directory exists and you have write permissions
   - Default location is `./database.sqlite` in the project root

2. **Permission errors:**
   - On Windows: Make sure you have write permissions in the project directory
   - On Mac/Linux: You may need to adjust file permissions:
     ```bash
     chmod 755 database.sqlite
     ```

3. **Database locked errors:**
   - This usually happens if another process is using the database
   - Make sure no other instances of the application are running
   - Close any database browsers/viewers that might have the file open

4. **Check your DATABASE_URL in `.env`:**
   - Should be a file path like: `./database.sqlite` or `/absolute/path/to/database.sqlite`
   - Use forward slashes (`/`) even on Windows, or use a relative path starting with `./`

### Port Already in Use

If port 5000 is already in use, you can change it in the `.env` file:

```env
PORT=3000
```

### Node Version Issues

Make sure you're using Node.js v18 or higher:

```bash
node --version
```

## Technologies Used

- **Frontend**: React 19, TypeScript, Vite, TailwindCSS
- **Backend**: Express.js, TypeScript
- **Database**: SQLite with Drizzle ORM
- **UI Components**: Radix UI, shadcn/ui

## License

MIT

