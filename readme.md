Project Overview

The Cloud Resume project is a fully serverless personal resume website hosted on AWS. The objective of this project was to design, deploy, and automate a production-ready cloud architecture while implementing backend functionality using AWS services.

![Aws Architecture](/Resume/assets/img/cloud_resume_challenge.png)

Architecture & Implementation
1. Static Website Hosting (Amazon S3)

* Developed a static resume website using HTML, CSS, and JavaScript.
* Deployed the website to an Amazon S3 bucket configured for static website hosting.
* Configured bucket policies to allow secure access via CloudFront.
* his provides scalable, highly available, and cost-efficient hosting.

2. Content Delivery & HTTPS (Amazon CloudFront)

* Configured Amazon CloudFront as a CDN to distribute content globally.
* Connected CloudFront to the S3 bucket as the origin.
* Enabled HTTPS for secure communication.
* Improved performance and reduced latency using edge caching.

3. Domain & DNS Management (Route 53 + Namecheap)

* Purchased domain: sharizzat.me from Namecheap.
* Managed DNS using Amazon Route 53.
* Created DNS records to point the domain to the CloudFront distribution.

Flow:

URL → Route 53 → CloudFront → S3

Challenge faced:
* There was a complication during DNS configuration between Namecheap and Route 53 (nameserver setup and propagation delay).
This was resolved by:

* Updating Namecheap nameservers to Route 53
* Verifying hosted zone records
* Waiting for proper DNS propagation
* This strengthened my understanding of real-world DNS management.

4. Backend Integration – View Counter (DynamoDB + Lambda)

- To make the resume more dynamic, I implemented a visitor counter.

DynamoDB

* Created a DynamoDB table to store and update visitor count.
* Used a primary key to track page visits.

AWS Lambda

* Developed a Lambda function to:
* Retrieve current visitor count
* Increment count
* Update DynamoDB
* Configured Lambda as an API endpoint.

IAM Permission Issue (Key Learning)

Initially, the Lambda function could not access DynamoDB due to insufficient permissions.

Root Cause:
The Lambda execution role did not have required IAM policies.

Solution:

Attached appropriate IAM policies allowing:

dynamodb:GetItem

dynamodb:UpdateItem

dynamodb:PutItem

Followed principle of least privilege.

This improved my understanding of IAM roles and service-to-service authorization in AWS.

5. Frontend & API Integration

* Wrote JavaScript to call the Lambda API endpoint.
* Dynamically displayed the visitor count on the website.
* Ensured asynchronous fetching and proper error handling.
* This connected frontend logic with serverless backend infrastructure.

6. Version Control (GitHub)

* Created a new GitHub repository.
* Committed project files and maintained version history.
* Used Git best practices for tracking updates and changes.

7. CI/CD Pipeline (Frontend Automation)

To automate deployment:

* Created a CI/CD pipeline using a .yml workflow file.
* Configured GitHub Actions to:

* * Automatically deploy updated frontend files to S3 on push
* * Maintain consistent and automated deployment workflow
* * This eliminates manual uploads and ensures continuous delivery.

8. IAM & Security Management

* Created IAM user for administrative access.
* Managed permissions securely.
* Applied least-privilege principles across services.
* Strengthened understanding of AWS identity and access management.

Key Skills Demonstrated

* AWS S3 (Static Hosting)
* CloudFront (CDN & HTTPS)
* Route 53 (DNS Management)
* Namecheap domain configuration
* AWS Lambda (Serverless Compute)
* DynamoDB (NoSQL Database)
* IAM Roles & Policies
* Git & GitHub
* CI/CD (GitHub Actions YAML)
* Debugging DNS & IAM permission issues
* Serverless Architecture Design

Key Learning Outcomes:

* Gained hands-on experience with real-world DNS configuration.
* Developed strong understanding of IAM roles and service permissions.
* Built a fully serverless, scalable cloud architecture.
* Implemented infrastructure components that mirror production environments.
* Applied DevOps principles through CI/CD automation.