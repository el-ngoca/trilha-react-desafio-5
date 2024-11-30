import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://piuypkkmmfnnxifiijei.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdXlwa2ttbWZubnhpZmlpamVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5ODI4NTUsImV4cCI6MjA0ODU1ODg1NX0.bh6oE4RmUXqmlP2AjvP_bwB-GfyjQZrXsyEYpvlb2ak',
    },
});
