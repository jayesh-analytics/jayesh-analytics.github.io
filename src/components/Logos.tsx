import React from 'react';

// Official GitHub Logo
export const GitHubLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// Official LinkedIn Logo
export const LinkedInLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0-.02-3.38 1.69 1.69 0 0 0 .02 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

// Official WhatsApp Logo
export const WhatsAppLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.893-.797-1.496-1.782-1.672-2.083-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.201.05-.377-.025-.527-.075-.15-.677-1.633-.928-2.236-.244-.588-.493-.509-.677-.518l-.578-.01c-.2 0-.527.075-.803.377-.276.301-1.053 1.029-1.053 2.509s1.079 2.91 1.229 3.111c.15.201 2.124 3.244 5.145 4.549.718.311 1.279.497 1.716.636.721.229 1.378.197 1.898.12.58-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12 2C6.477 2 2 6.477 2 12c0 1.905.534 3.684 1.46 5.202L2 22l4.945-1.428A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
);

// Official Google Logo (4-color)
export const GoogleLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

// Official Coursera Logo
export const CourseraLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="#0056D2">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12.5h2v9h-2zm-3 2h2v7H8zm6 1h2v6h-2z" />
  </svg>
);

// Official TATA Logo
export const TataLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg className={className} viewBox="0 0 60 40" fill="#00529B">
    <path d="M10 8h40v5H33v19h-6V13H10V8zm12 9l8 15 8-15h5L32 35h-4L17 17h5z" />
  </svg>
);

// Official Forage Logo
export const ForageLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <img
    src="/forage.jpeg"
    alt="Forage"
    className={`${className} object-contain rounded-xs inline-block`}
    onError={(e) => {
      const target = e.currentTarget;
      if (target.src !== 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/Forage.jpeg') {
        target.src = 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/Forage.jpeg';
      }
    }}
  />
);

// Official Coding Ninjas Logo
export const CodingNinjasLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <img
    src="/coding_ninjas.png"
    alt="Coding Ninjas"
    className={`${className} object-contain inline-block`}
    onError={(e) => {
      const target = e.currentTarget;
      if (target.src !== 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/Coding_Ninjas_Logo.png') {
        target.src = 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/Coding_Ninjas_Logo.png';
      }
    }}
  />
);

// Official MohanLal Sukhadia University (MLSU) Logo
export const MLSULogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <img
    src="/mlsu.png"
    alt="MLSU"
    className={`${className} object-contain inline-block`}
    onError={(e) => {
      const target = e.currentTarget;
      if (target.src !== 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/MLSU.png') {
        target.src = 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/MLSU.png';
      }
    }}
  />
);

// Official Python Logo
export const PythonLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg className={className} viewBox="0 0 110 110">
    <path
      d="M54.5 5C28.2 5 29.8 16.4 29.8 16.4l.03 11.8h25.1v3.5H19.7S5 30 5 56.4c0 26.3 12.8 25.3 12.8 25.3h7.6v-10.7s-.4-12.8 12.6-12.8h24.4s12.1-.2 12.1-11.8V16.4S78.8 5 54.5 5zm-14 8.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8z"
      fill="#387EB8"
    />
    <path
      d="M55.5 105c26.3 0 24.7-11.4 24.7-11.4l-.03-11.8H55.07v-3.5h35.2s14.7 1.7 14.7-24.7c0-26.3-12.8-25.3-12.8-25.3h-7.6v10.7s.4 12.8-12.6 12.8H47.57s-12.1.2-12.1 11.8v19.9s-4.3 11.4 20.03 11.4zm14-8.2a4.4 4.4 0 1 1 0-8.8 4.4 4.4 0 0 1 0 8.8z"
      fill="#FFE052"
    />
  </svg>
);

// Official MySQL Logo
export const MySQLLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="#00758F">
    <path d="M82.4 41.2c-2.4-7.2-9-12.5-17-13.8-11.3-1.8-20.2 4.5-23.7 13.9-3.2 8.7-2.1 17.6 1.3 25.5 3.5 8.1 10.3 12.8 19 12.8 5.6 0 10.9-2 15.3-5.8l-4-5.3c-3.1 2.6-7 4-11.1 4-6.1 0-11-3.4-13.5-9.2-.5-1.1-.9-2.3-1.2-3.6h25.8c4.2 0 7.4-3.3 7.4-7.4v-3.8c0-2.6-.6-5.1-1.8-7.3h-.5zm-7.6 7.3H52.5c.8-5 4.6-9.1 9.8-9.1 5.3 0 9.8 3.8 10.9 9.1h1.6z" />
    <path
      d="M32.8 31.7c-4.4-4-10-6.2-16.1-6.2C7.5 25.5 0 33 0 42.2c0 8.9 7.1 16.3 16 16.7v-7c-5.2-.4-9.2-4.7-9.2-9.7 0-5.4 4.4-9.8 9.9-9.8 3.8 0 7.2 2.1 8.9 5.3l7.2-6z"
      fill="#F29111"
    />
  </svg>
);

// Official Microsoft Power BI Logo
export const PowerBILogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#18181B" />
    <rect x="6" y="16" width="5" height="10" rx="1.5" fill="#EAA200" />
    <rect x="13" y="11" width="5" height="15" rx="1.5" fill="#F2C811" />
    <rect x="20" y="6" width="5" height="20" rx="1.5" fill="#FBE66D" />
  </svg>
);

// Official Microsoft Excel Logo
export const ExcelLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#107C41" />
    <path
      d="M19.5 8h6a1.5 1.5 0 011.5 1.5v13a1.5 1.5 0 01-1.5 1.5h-6V8z"
      fill="#185C37"
    />
    <path
      d="M5 9.5A1.5 1.5 0 016.5 8h13v16h-13A1.5 1.5 0 015 22.5v-13z"
      fill="#21A366"
    />
    <path
      d="M9 12.5l2.8 3.5L9 19.5h2l1.8-2.5 1.8 2.5h2l-2.8-3.5 2.8-3.5h-2l-1.8 2.5-1.8-2.5H9z"
      fill="#FFFFFF"
    />
  </svg>
);

// Official Tableau Logo
export const TableauLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#E97627" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" stroke="#1F77B4" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2.5" fill="#D62728" />
  </svg>
);

// Official SQLite Logo
export const SQLiteLogo: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#003B57" />
    <path
      d="M8 9c0-1.7 4-3 8-3s8 1.3 8 3v14c0 1.7-4 3-8 3s-8-1.3-8-3V9z"
      stroke="#00A2D3"
      strokeWidth="2"
    />
    <path d="M8 14c0 1.7 4 3 8 3s8-1.3 8-3" stroke="#00A2D3" strokeWidth="1.8" />
    <path d="M8 19c0 1.7 4 3 8 3s8-1.3 8-3" stroke="#00A2D3" strokeWidth="1.8" />
  </svg>
);
