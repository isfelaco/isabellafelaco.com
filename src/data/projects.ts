interface Project {
	title: string;
	subtitle?: string;
	description: string;
	videoUrl?: string;
	imageUrl?: string;
	repository?: string;
	url?: string;
	link?: string;
}

interface Projects {
	[key: string]: Project[];
}

const data: Projects = {
	opengov: [
		{
			title: "Date Picker Component",
			subtitle: "Made for OpenGov in 2022",
			videoUrl: "DatePicker.mov",
			description:
				"This component allows a user to select a date by either typing in the input (with auto-formatting), or by selecting a date from the calendar, thus auto-populating the input. User accessibility is included through keyboard navigation of the component and the calendar. It was decided that a custom component, rather than using a third-party library, was needed for advanced styling. Now, this component is being phased out in favor of a third-party library.",
		},
		{
			title: "Requesting Changes",
			subtitle: "Contributed to for OpenGov in 2022",
			videoUrl: "RequestChanges.mov",
			description:
				"This workflow is the Requesting Changes function for records. I personally contributed much of the frontend code, including the custom wrapper components on each page, and the overall layouts. In Q3 2025, I will be responsible for redoing this workflow to use the new form renderer that I have been developing.",
		},
		{
			title: "Communications Center Settings",
			subtitle: "Contributed to for OpenGov in 2023",
			imageUrl: "CommunicationsCenter.png",
			description:
				"This settings page allows users to create email templates. Besides the footer text input, the components were custom-made myself. The header upload allows users to upload an image and preview it in the container, while the signature upload allows users to upload images and attach a text signature. This page has since been updated to use MUI components.",
		},
		{
			title: "Inspection Scheduling Settings",
			subtitle: "Contributed to for OpenGov in 2024",
			videoUrl: "InspectionSettings.mov",
			description:
				"This settings page allows users to update constraints for scheduling inspections. I started by extending the backend through adding a GraphQL schema for the new fields. I then updated query documents and queries to retrieve the new values. I then developed the page with custom components for each input. To integrate the new settings, I wrote a custom function to pass to the date picker that checked these conditions.",
		},
		{
			title: "Form Builder",
			subtitle: "Contributed to for OpenGov in 2024/2025",
			imageUrl: "FormBuilder.png",
			description:
				"This is a custom form builder that I contributed to alongside a senior engineer. I mostly worked on the configuration panel, including date settings, and styling. I also worked on general defect fixes and optimizations, including virtualization of fields and sections.",
		},
		{
			title: "Form Renderer",
			subtitle: "Made for OpenGov in 2025",
			description:
				"Starting in Q2 2025, I began developing a new form renderer. The library includes custom components for inputs and a standardized way to render them. It utilizes MUI and react-hook-form to create a flexible and powerful form renderer. This library is intended to be used everywhere forms are rendered in the PLC suite, with potential to be used in other suites. Many custom components were made, including a new fully-accessible file upload field and encrypted input field.",
		},
		{
			title: "Record Details",
			subtitle: "Made for OpenGov in 2025",
			imageUrl: "RecordDetails.png",
			description:
				"This page is used to view and edit the details of a record. It has been updated from the current implementation to use the new form renderer. The accordions are custom components meant to be reused with all of our form renderers. A custom modal was made for multi-entry sections.",
		},
	],
	uva: [
		{
			title: "Study Buddy Web Application",
			subtitle: "Contributed to for a group project in 2022",
			description:
				"This web application was made using the Django MVC framework, written in Python. It allows users to create a profile via Google login and schedule study times with other members. Users can search for classes, add specific sections to their schedule, and message friends to coordinate study times. It also utilized a Heroku database and Google Authentication.",
			repository: "https://github.com/isfelaco/Study-Buddy",
		},
		{
			title: "Daily Bugle",
			subtitle: "Created in 2023",
			description:
				"This web application was made using HTML, CSS, and JavaScript. It's a news outlet application with a simple MongoDB backend. There is authentication and users are cached, allowing for multiple user sessions.",
			repository: "https://github.com/isfelaco/Daily-Bugle",
		},
		{
			title: "CVille 4 Rent: A Charlottesville Renters' Application",
			subtitle: "Created in 2024",
			description:
				"This web application was made using HTML, PHP, and LESS. Currently, I am in the beginning phases where I'm implementing the frontend, while the backend will be implemented later. There is mock data in JSON files that is brought in using PHP. I have also utilized the Bootstrap framework.",
			url: "https://cs4640.cs.virginia.edu/isf4rjk/CVille4Rent",
			repository:
				"https://github.com/isfelaco/CS-4640/tree/main/web/www/CVille4Rent",
		},
	],
	independent: [
		{
			title: "Personal Portfolio Website",
			description:
				"I created this website using the React.js framework and Typescript. I utilized primarily MUI components for sophisticated styling, and I integrated Email.js and ReactPlayer for advanced functionalities. The app is fully mobile-responsive, with attention to accessibility. The website was previously hosted through DreamHost with a continuous integration workflow set up through GitHub Actions to allow changes to be automatically deployed to the server. I have since moved the website to Github Pages as I don't need that much storage.",
			link: "https://github.com/isfelaco/isabellafelaco.com",
		},
	],
	other: [
		{
			title: "Aspirations vs. Reality in Engineering",
			description:
				"For this research project, I worked with a small group to analyze publicly accessible content of websites for engineering schools and departments to compare their curricula to their mission statement. This cumulated in crafting a paper describing our research and displaying our sources.",
		},
	],
};

export default data;
