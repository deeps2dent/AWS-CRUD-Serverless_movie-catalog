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

-----------------------

### 2.1 Set Up Environment

Copy .env.example to .env:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditcp .env.example .env   `

Then edit .env and add:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   envCopyEditVITE_API_URL=https://.execute-api..amazonaws.com   `

### 2.2 Run Dev Server

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnpm run dev   `

Open your browser at:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   arduinoCopyEdithttp://localhost:5173   `

🚀 3. Production Deploy
-----------------------

### 3.1 Build the App

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditcd frontend  npm run build   `

### 3.2 Upload to S3

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditaws s3 sync dist/ s3:// --delete   `

Then in CloudFront, create a cache invalidation for:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   CopyEdit/*   `

🌐 4. Access URLs
-----------------

*   **Dev:** [http://localhost:5173](http://localhost:5173)
    
*   **Prod:** https:// (or your custom domain)
    

🤝 Contributing
---------------

Feel free to open issues or PRs to improve styling, add features, or fix bugs.

📜 License
----------

This project is licensed under the MIT License.
