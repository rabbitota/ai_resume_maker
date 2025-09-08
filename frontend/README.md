<pre>
 <h1>AI Resume Maker</h1>

AI Resume Maker is a full-stack web application that allows users to generate professional resumes using AI (Deepseek-R1 via Ollama). Built with a modern tech stack — Java Spring Boot for the backend and React + Vite for the frontend — this project provides a seamless, fast, and responsive user experience.
<b>Tech Stack:</b>
o	<b>Frontend</b>
•	Framework: React.js + Vite
•	Styling: TailwindCSS, DaisyUI
•	Libraries:
o	Axios – For API calls
o	React Router – For client-side routing
o	React Hot Toast – For toast notifications
o	React Hook Form – For efficient form handling and validation
o	React TSParticles – For animated backgrounds
o	React Icons – For iconography
o	react-to-pdf- Help integrate actual resume page
o	daisyUI- Customize theme

o	<b>Backend</b>
•	Platform: Spring Boot v3.4.4 (via Spring Initializr)
•	Language:  Java 17
•	Build Tool: Maven
•	AI Engine: Ollama (Deepseek-r1)
•	Libraries & Annotations:
o	`@RestController`, `@RequestMapping`, `@CrossOrigin` – For REST controller mapping
o	`HttpStatus`, `ResponseEntity` – For handling HTTP responses
o	`ObjectMapper` – For parsing JSON objects
o	`Module` – For modular configuration
•	Lombok – To reduce boilerplate code

<b>Hosting:</b>
o	Platform:  Render (for deployment)
o	Link: https://ai-resume-maker-4i5w.onrender.com/

<b>Features:</b>
o	AI-powered resume generation
o	Real-time form validation with responsive UI
o	Download resumes in PDF format
o	Modern animations and smooth UX
o	Fully RESTful API integration
o	Cross-origin request support (CORS)

<b>Installation Guide:</b>
Clone the Repository:
git clone https://github.com/rabbitota/ai-resume-maker.git
cd ai-resume-maker
Run the Application
o	Backend (Spring Boot): 
	cd backend
	./mvnw spring-boot:run
o	Or using Maven:
	mvn spring-boot:run
o	Frontend (React + Vite):
	cd frontend
	npm install
	npm run dev
 
<b>REST API Overview </b>
Method	Endpoint	Description
POST	/api/resume/generate	Generate resume using AI
GET	/api/resume/{id}	Fetch resume by ID
Contributing:
Contributions are welcome! Feel free to submit issues and pull requests.
o	Fork the project
o	Create your feature branch (git checkout -b feature/AmazingFeature)
o	Commit your changes (git commit -m 'Add some feature')
o	Push to the branch (git push origin feature/AmazingFeature)
o	Open a pull request
 
<b>Contact:</b>
Have questions or suggestions? Feel free to reach out via GitHub Issues or Pull Requests.
Let me know if you'd like me to tailor any sections further—like adding your GitHub username, a live link, or demo screenshots.

</pre>
