const projects = [
    {
        slug: 'uptime-monitor-api',
        title: 'Uptime Monitor API',
        shortDescription: 'Monitor your website & get uptime/downtime report',
        description:
            'Uptime monitoring RESTful API server that allows authenticated users to monitor URLs, and get detailed uptime reports about their availability, average response time, and total uptime/downtime.',
        tools: [
            {
                name: 'nodejs',
                title: 'Node.js'
            },
            {
                name: 'express',
                title: 'Express'
            },
            {
                name: 'typescript',
                title: 'Typescript'
            },
            {
                name: 'mongodb',
                title: 'MongoDB'
            },
            {
                name: 'jwt',
                title: 'JWT'
            },
            {
                name: 'docker',
                title: 'Docker'
            },
            {
                name: 'jasmine',
                title: 'Jasmine'
            }
        ],
        links: [
            {
                title: 'GitHub',
                ref: 'https://github.com/MuhamedMagdi/UptimeMonitoringApi'
            }
        ]
    },
    {
        slug: "cloud-storage",
        title: "Cloud Storage",
        shortDescription: "A RESTful cloud storage API server using firebase",
        description: "A RESTful cloud storage server built with express that let's authenticated user upload and share files with option for setting the file privacy option. Documented using swagger and uses Firebase Cloud Storage as cloud provider.",
        tools: [
            {
                name: 'nodejs',
                title: 'Node.js'
            },
            {
                name: 'express',
                title: 'Express'
            },
            {
                name: 'javascript',
                title: 'Javascript'
            },
            {
                name: 'mongodb',
                title: 'MongoDB'
            },
            {
                name: 'jwt',
                title: 'JWT'
            },
            {
                name: 'docker',
                title: 'Docker'
            }
        ],
        links: [
            {
                title: 'Github',
                ref: 'https://github.com/MuhamedMagdi/CloudStorage'
            }
        ]
    },
    {
        slug: "alphavantage-go",
        title: "AlphaVantage Go",
        shortDescription: "A Go wrapper for Alpha Vantage API for financial data",
        description: "Alpha Vantage delivers a free API for real time financial data and most used finance indicators. This module implements a wrapper to the free API provided by alphavantage.co.",
        tools: [
            {
                name: 'go',
                title: 'Golang'
            }
        ],
        links: [
            {
                title: 'GitHub',
                ref: 'https://github.com/MuhamedMagdi/alphavantage-go'
            }
        ]
    },
    {
        slug: "express-boilerplate",
        title: "Express Boilerplate",
        shortDescription: "A boilerplate for building a RESTful APIs",
        description: "A boilerplate for building a RESTful APIs using Node.js, Express, and Mongoose with an implemented user authentication, santizing, error handling, docker support and post man documentation",
        tools: [
            {
                name: 'nodejs',
                title: 'Node.js'
            },
            {
                name: 'express',
                title: 'Express'
            },
            {
                name: 'javascript',
                title: 'Javascript'
            },
            {
                name: 'mongodb',
                title: 'MongoDB'
            },
            {
                name: 'jwt',
                title: 'JWT'
            },
            {
                name: 'docker',
                title: 'Docker'
            }
        ],
        links: [
            {
                title: 'Github',
                ref: 'https://github.com/MuhamedMagdi/express-boilerplate'
            }
        ]
    },
    {
        slug: "sefprotrade",
        title: "Sefprotrade",
        shortDescription: "Building the Backend for a trading company",
        description: "SEFPRO is a trading company specializing in the textile and apparel industries in the Middle East. My team and I (4 members), The website has these features (Admin dashboard, CRUD [Products, Partners, Categories, Subcategories], Emailing, File upload) the website is hosted on DigitalOcean",
        tools: [
            {
                name: 'django',
                title: 'Django' 
            },
            {
                name: 'postgresql',
                title: 'PostgreSQL'
            },
            {
                name: 'jwt',
                title: 'JWT'
            },
            {
                name: 'docker',
                title: 'Docker'
            },
            {
                name: 'nginx',
                title: 'Nginx'
            }
        ],
        links: [
            {
                title: 'Website',
                ref: 'https://www.sefprotrade.com'
            }
        ] 
    },
    {
        slug: "storefront-api",
        title: "Storefront API",
        shortDescription: "A RESTful E-Commerce API Server",
        description: "A RESTful E-Commerce API Server built with express, typescript, and fully tested with jasmine",
        tools: [
            {
                name: 'nodejs',
                title: 'Node.js'
            },
            {
                name: 'express',
                title: 'Express'
            },
            {
                name: 'typescript',
                title: 'Typescript'
            },
            {
                name: 'postgresql',
                title: 'PostgreSQL'
            },
            {
                name: 'jwt',
                title: 'JWT'
            },
            {
                name: 'jasmine',
                title: 'Jasmine'
            }
        ],
        links: [
            {
                title: 'GitHub',
                ref: 'https://github.com/MuhamedMagdi/StorefrontAPI'
            }
        ]
    },
    {
        slug: "ci-cd",
        title: "CI-CD",
        shortDescription: "Using CircleCi to deploy a prebuilt webstie to AWS",
        description: "Using CircleCi to upload the front end to S3 bucket and deploy the backend to EC2 instace in AWS",
        tools: [
            {
                name: 'circleci',
                title: 'CircleCI'
            }
        ],
        links: [
            {
                title: 'GitHub',
                ref: 'https://github.com/MuhamedMagdi/CI-CD'
            }
        ]
    }
];

export default projects;
