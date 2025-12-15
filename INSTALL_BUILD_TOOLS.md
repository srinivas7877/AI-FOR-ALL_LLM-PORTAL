# Installing Visual Studio Build Tools for Windows

`better-sqlite3` requires native compilation, which needs Visual Studio Build Tools on Windows.

## Quick Installation Guide

### Option 1: Visual Studio Build Tools (Recommended)

1. **Download Visual Studio Build Tools:**
   - Visit: https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022
   - Click "Download" under "Build Tools for Visual Studio 2022"

2. **Run the installer:**
   - Run the downloaded `.exe` file
   - When prompted, select **"Desktop development with C++"** workload
   - Make sure these components are included:
     - MSVC v143 - VS 2022 C++ x64/x86 build tools
     - Windows 10/11 SDK
   - Click "Install" (this may take 10-30 minutes depending on your internet speed)

3. **After installation:**
   - Close and restart your PowerShell/Command Prompt
   - Navigate to your project directory
   - Run `npm install` again

### Option 2: Using winget (Faster, if available)

If you have Windows Package Manager (winget) installed:

```powershell
winget install Microsoft.VisualStudio.2022.BuildTools --override "--quiet --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"
```

### Option 3: Minimal Installation (Alternative)

If the full Build Tools is too large, you can try:

```powershell
npm install --global windows-build-tools
```

However, this method is deprecated and may not work with newer Node.js versions. Visual Studio Build Tools is the recommended approach.

## Verify Installation

After installation, verify it works:

```powershell
npm install better-sqlite3
```

If it installs without errors, you're all set!

## Troubleshooting

### "Still getting build errors after installing Build Tools"

1. **Restart your terminal** - The PATH might not be updated
2. **Check Node.js version compatibility:**
   ```powershell
   node --version
   ```
   - Node.js v18+ is recommended
3. **Clear npm cache and try again:**
   ```powershell
   npm cache clean --force
   rm -r node_modules
   npm install
   ```

### "Installation takes too long"

The Build Tools installer downloads several GB of files. This is normal and necessary for native module compilation. The installation only needs to be done once.

### "Don't want to install Build Tools"

If you really want to avoid native compilation, you could:
- Use WSL2 (Windows Subsystem for Linux) where the installation is simpler
- Use Docker to run the project in a container
- Switch to a cloud development environment

However, installing Build Tools is the standard solution and recommended for Windows Node.js development.

