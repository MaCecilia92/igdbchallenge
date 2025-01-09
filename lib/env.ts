export function validateEnv() {
    const requiredEnvVars = ['IGDB_CLIENT_ID', 'IGDB_ACCESS_TOKEN'];
    
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`);
      }
    }
  }