export interface Project {
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
      title: "Form Builder",
      subtitle: "Contributed to for OpenGov in 2024/2025",
      imageUrl: "FormBuilder.png",
      description:
        "A custom form builder I worked on alongside a senior engineer. I built much of the configuration panel, including date settings and styling, and handled defect fixes and performance work such as virtualizing fields and sections. I also contributed to the builder's redesign, including a new AI-powered feature.",
    },
    {
      title: "Form Renderer",
      subtitle: "Made for OpenGov in 2025/2026",
      description:
        "A redesign of the application's form-rendering system, which I led as the primary frontend engineer. The library provides custom input components and a standard way to render them, built on MUI and react-hook-form, including a fully accessible file upload field and an encrypted input field. I authored the architectural documentation the team adopted, took the redesign to private preview with 5 customers, and added lazy loading and virtualization to scale it for general availability.",
    },
    {
      title: "Record Details",
      subtitle: "Made for OpenGov in 2025",
      imageUrl: "RecordDetails.png",
      description:
        "The page for viewing and editing a record's details, rebuilt on the new form renderer. I made its accordions reusable across all of our form renderers, and built a custom modal for multi-entry sections.",
    },
    {
      title: "Inspection Scheduling Settings",
      subtitle: "Contributed to for OpenGov in 2024",
      videoUrl: "InspectionSettings.mov",
      description:
        "A settings page for the constraints that govern inspection scheduling. I extended the GraphQL schema with the new fields, updated the queries that read them, and built the page with custom inputs. To apply the settings, I wrote the logic the date picker uses to check each constraint.",
    },
    {
      title: "Communications Center Settings",
      subtitle: "Contributed to for OpenGov in 2023",
      imageUrl: "CommunicationsCenter.png",
      description:
        "A settings page for creating email templates. I built its custom components, including a header upload that previews the image in place and a signature upload that pairs an image with a text signature. The page has since moved to MUI components.",
    },
    {
      title: "Requesting Changes",
      subtitle: "Contributed to for OpenGov in 2022",
      videoUrl: "RequestChanges.mov",
      description:
        "The Requesting Changes workflow for records. I wrote much of its frontend, including the wrapper components on each page and the overall layouts.",
    },
    {
      title: "Date Picker Component",
      subtitle: "Made for OpenGov in 2022",
      videoUrl: "DatePicker.mov",
      description:
        "A date picker that accepts either typed input, with auto-formatting, or a selection from the calendar, which fills in the input. It supports full keyboard navigation of both the input and the calendar. We built it in-house rather than use a third-party library to support advanced styling.",
    },
  ],
  uva: [
    {
      title: "Study Buddy Web Application",
      subtitle: "Contributed to for a group project in 2022",
      description:
        "A Django web app, written in Python, for scheduling study sessions. Users sign in with Google, search for classes, add sections to their schedule, and message friends to coordinate study times. It ran on Heroku with a Heroku-hosted database.",
      repository: "https://github.com/isfelaco/Study-Buddy",
    },
    {
      title: "Daily Bugle",
      subtitle: "Created in 2023",
      description:
        "A news site built with HTML, CSS, and JavaScript on a MongoDB backend, with authentication and cached users to support multiple sessions.",
      repository: "https://github.com/isfelaco/Daily-Bugle",
    },
    {
      title: "CVille 4 Rent: A Charlottesville Renters' Application",
      subtitle: "Created in 2024",
      description:
        "A rental listings app for Charlottesville. I built the frontend with HTML, PHP, LESS, and Bootstrap, loading mock listing data from JSON files with PHP.",
      url: "https://cs4640.cs.virginia.edu/isf4rjk/CVille4Rent",
      repository:
        "https://github.com/isfelaco/CS-4640/tree/main/web/www/CVille4Rent",
    },
  ],
  other: [
    {
      title: "Aspirations vs. Reality in Engineering",
      description:
        "A research project with a small group comparing engineering schools' curricula with their stated missions, using their public websites. It culminated in a paper presenting our research and sources.",
    },
  ],
};

export default data;
