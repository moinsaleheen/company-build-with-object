let parentCompany = {
    companyName: "Amazon Inc",
    founded: 1994,
    founder: "Jeff Bezos",
    headquarters: "Seattle, Washington, USA",
    industry: ["E-commerce", "Cloud Computing", "AI, Media"],
    childCompanies: [
        {
            name: "Amazon Web Services (AWS)",
            founded: 2006,
            description: "AWS provides on-demand cloud computing platforms to individuals, companies, and governments.",
            brands: [
                { 
                    brandName: "Amazon EC2",
                    category: "Compute"
                },
                { 
                    brandName: "Amazon S3",
                    category: "Storage"
                },
                { 
                    brandName: "Amazon RDS",
                    category: "Database"
                },
                { 
                    brandName: "Amazon SageMaker",
                    category: "AI & Machine Learning"
                }
            ]
        },
        {
            name: "Amazon Prime Video",
            founded: 2006,
            brands: [
                { 
                    brandName: "Amazon Originals",
                    category: "TV & Series"
                },
                { 
                    brandName: "Prime Store",
                    category: "Movie Rentals"

                },
                { 
                    brandName: "Prime Video Channels",
                    category: "Add-on Channels"

                }
            ]
        },
        {
            name: "Amazon Fresh",
            founded: 2007,
            description: "A grocery delivery and pickup service in select locations.",
            brands: [
                { 
                    brandName: "Amazon Fresh Food",
                    category: "Groceries"
                },
                { 
                    brandName: "Amazon Pantry",
                    category: "Household Items"
                },
                { 
                    brandName: "Whole Foods",
                    category: "Organic & Natural Foods"
                }
            ]
        },
        {
            name: "Amazon Kindle",
            founded: 2007,
            description: "Amazon Kindle offers digital book reading devices and services.",
            brands: [
            { 
                brandName: "Kindle Paperwhite",
                category: "Devices"
            },
            { 
                brandName: "Kindle Store",
                category: "E-books"
            },
            { 
                brandName: "Kindle Unlimited", 
                category: "Subscription Service"
            }
        ]
    },
    {
        name: "Zappos",
        acquired: 2009,
        description: "Zappos is an online shoe and clothing retailer.",
        brands: [
            { 
                brandName: "Zappos Footwear",
                category: "Shoes"
            },
            { 
                brandName: "Zappos Style",
                category: "Fashion"
            },
            { 
                brandName: "Zappos Kids",
                category: "Children's Wear"
            }
        ]
    }
  ],
};