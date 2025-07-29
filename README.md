# 🎬 Movie Catalog CRUD App

A serverless React single-page app that lets authenticated users browse, add, edit and delete **movies**.  
Built with AWS Lambda + API Gateway + DynamoDB (shared layer), secured by Amazon Cognito, and hosted on S3+CloudFront.

---

## 🔍 Features

- **Authentication** via Amazon Cognito (OIDC)  
- **CRUD API** implemented as Node.js Lambdas behind API Gateway  
- **DynamoDB** for persistent storage (wrapped in a Lambda Layer)  
- **React Frontend** with React Router, custom CSS  
- **Global Hosting**: S3 + CloudFront + custom domain + HTTPS  

---

## 📁 Project Structure

aws-serverless-app/
├── frontend/ # React SPA
│ ├── src/
│ │ ├── NavBar.jsx
│ │ ├── App.jsx
│ │ ├── AddMovieForm.jsx
│ │ ├── ItemDetails.jsx
│ │ └── utils/apis.js
│ ├── index.css
│ ├── App.css
│ └── package.json
├── LambdaWithLayer/ # shared layer code
│ └── nodejs/utils.mjs
├── lambda/ # individual Lambda functions
│ └── get.js, post.js…
├── .gitignore
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/<your-username>/<repo>.git
cd aws-serverless-app/frontend
npm install
###2. Local Development
#Copy .env.example → .env in /frontend, then set:

ini
Copy
Edit
VITE_API_URL=https://<your-api-id>.execute-api.<region>.amazonaws.com
#Run the dev server:

bash
Copy
Edit
npm run dev
#Open: http://localhost:5173

###3. Production Deploy
bash
Copy
Edit
cd frontend
npm run build
aws s3 sync dist/ s3://<your-s3-bucket> --delete
#Then in the CloudFront console create an invalidation for /*.

###4. Access
##Dev: http://localhost:5173

##Prod: https://<your-cloudfront-domain> (or your custom domain)

###🤝 Contributing
Feel free to open issues or PRs to improve styling, add features, or fix bugs.

###📜 License
#This project is licensed under the MIT License.

pgsql
Copy
Edit

---

## 2. Commit via GitHub Web UI

1. In your repository on GitHub, click on the **README.md** file in the file list (if it exists), or click **Add file → Create new file**, and name it `README.md`.
2. Click the **pencil icon** (✏️) or just start typing in the editor.
3. **Paste** the content from above.
4. Scroll down to **“Commit new file”** (or “Commit changes”):
   - **Commit message:** `Add project README`
   - Choose **Commit directly to the main branch**.
5. Click **Commit new file**.
