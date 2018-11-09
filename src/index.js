import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

let breakPoints = [500, 750, 1000];
//let projects = [];
let projects = [
	{
		title: "React Component Library",
		description: "I led the development of a reusable component library built in React that can be pulled into web applications via a NPM package. Component library consisted of input text elements, drop downs, custom forms, radio/checkboxes, etc.",
		image: '/assets/arc.png',
		shortDescription: "In-house reusable component library to increase design-consistency across applications",
		github: "",
		project_url: "", //http://drewjex.x10host.com/booktracker/
		tags: [
			"React",
			"JavaScript",
			"Webpack",
			"Yarn"
		]
	},
	{
		title: "Travel Discount App",
		description: "I helped with the design and fully developed the front-end of the activities-reservation portion of the app for both desktop and mobile. Implmented best practices and most-recent features of React and Redux",
		image: '/assets/activities.png',
		shortDescription: "Travel app built on React/Ruby that has 300K+ users",
		github: "",
		project_url: "", //http://drewjex.x10host.com/booktracker/
		tags: [
			"React",
			"Redux",
			"Javascript",
			"Ruby on Rails"
		]
	},
	{
		title: "Personal Music Site",
		description: "I love to write music, and I am currently in the process of designing and developing a fully-functional single page app that allows users to hear and download my songs online.",
		image: '/assets/music.png',
		shortDescription: "Currently under-construction - React single-page app design mockup",
		github: "https://github.com/drewjex/music",
		project_url: "https://music.drewjex.com", //http://drewjex.x10host.com/booktracker/
		tags: [
			"React",
			"Javascript",
			"SCSS"
		]
	},
	{
		title: "Disneyland Tickets App",
		description: "I helped design and personally developed a solution for selling discounted Disneyland tickets that is mobile friendly and easy to scan. Tickets are also printable and display consistently when printed on all major browsers, including IE11.",
		image: '/assets/disney.png',
		shortDescription: "Disneyland Ticket mobile web app for easy scanning at gate",
		github: "",
		project_url: "http://disneyland.drewjex.com", //http://drewjex.x10host.com/booktracker/
		tags: [
			"Javascript",
			"SCSS"
		]
	},
	{
		title: "Thailand Travel Design Mockup",
		description: "This is simply a front-end mockup of a potential landing page for a Travel site to Thailand. It showcases basic ability to design a simple, yet attractive web application using HTML and CSS.",
		image: '/assets/thailand.png',
		shortDescription: "Design Mockup for Thailand Travel Landing Page",
		github: "",
		project_url: "http://thailand.drewjex.com", //http://drewjex.x10host.com/booktracker/
		tags: [
			"HTML",
			"SCSS"
		]
	},
	{
		title: "BookTracker",
		description: "I worked directly with several employees at BYU's University Accessibility Center to personally design, develop, and deploy a robust MVC PHP/Javascript administration application. The app provides a student portal where students can submit books for conversion and an admin portal where employees and administrators can receive requests, track book statuses, send emails, manage employees, and much more. A variety of JQuery and Javascript libraries were used on the front-end, which make ajax requests to save data and update the MySQL database. To comply with student protections under FERPA law, only an incomplete demo site is available for viewing.",
		image: '/assets/booktracker.jpg',
		shortDescription: "Robust Administrative Web Application for BYU's UAC.",
		github: "https://github.com/drewjex/BookTracker",
		project_url: "", //http://drewjex.x10host.com/booktracker/
		tags: [
			"JavaScript",
			"JQuery",
			"MySQL",
			"PHP"
		]
	},
	{
		title: "MusicMaker",
		description: `My senior year at BYU, I received an ORCA research grant to develop this computational-creativity project under the mentorship of Professor Dan Ventura.		
		MusicMaker generates music spontaneously by analyzing musical patterns in other music. 
		The complex song-analysis process is built in PHP and uses a Javascript MIDI library to play the song to the browser. 
		A more detailed description of the project details can be found in the Github repo (musicmaker.pdf).`,
		image: '/assets/music1.jpg',
		shortDescription: "Cutting-edge Spontaneous Music-Generation Software.",
		github: "https://github.com/drewjex/MusicMaker-v2",
		project_url: "", //http://drewjex.x10host.com/musicmaker/client/
		tags: [
			"JavaScript",
			"PHP"
		]
	},
	{
		title: "EventTickets",
		description:`While employed at BYU, I worked on the admin side of this site, including creating features to allow users to broadcast their own events and manage ticket sales. Developed primarily in PHP, Javascript, Jquery, and the Smarty framework, this site is used to sell tickets for many big events and programs around campus, including concerts, festivals, etc.`,
		image: '/assets/tech6.jpg', //'/assets/eventtickets.jpg',
		shortDescription: "JavaScript web application used by over 40,000 users.",
		github: "https://github.com/drewjex/event-editor",
		project_url: "https://eventtickets.byu.edu/",
		tags: [
			"JavaScript"
		]
	},
	{
		title: "Outdoors Unlimited",
		description: `While employed at BYU, I built this application for the popular Outdoors Unlimited store in Provo, UT. This Wordpress site integrates with a third-party SOAP interface to allow for online reservations, and uses the Woocommerce plugin (with modifications) to handle rental items.`,
		image: '/assets/outdoors.jpg',
		shortDescription: "Designed and Developed Web App for popular Outdoors company in Provo, UT.",
		github: "",
		project_url: "https://outdoors.byu.edu/",
		tags: [
			"JavaScript",
			"PHP"
		]
	},
	{
		title: "Reading Tracker",
		description: "I wrote this project while serving as a volunteer in Bangkok, Thailand. It is written in PHP, Javascript, and uses a MySQL database. Users can create accounts, check-off chapters they've read, and then compare their reading to friends. Organizations in India and Mongolia also requested this website, so I wrote it to be flexible with other languages.",
		image: '/assets/scriptureTracker.jpg',
		shortDescription: "Scripture Reading-Tracker Web App used by church members throughout Asia.",
		github: "",
		project_url: "",
		tags: [
			"JavaScript",
			"PHP",
			"MySQL"
		]
	},
	{
		title: ".NET Components",
		description: `While employed at SkyWest, I built several custom .NET components to work better with the MVVM framework common in WPF applications. The ObservableState allows for easy assignment of event-handlers to changes in state. The TrulyObservableCollection, also on github, allows for data-collections to raise notifications whenever any piece of data within the collection is changed.`,
		image: '/assets/tech4.jpg',//'https://unsplash.it/750/750?image=0', //'/assets/net.jpg',
		shortDescription: "Custom .NET components I designed to make writing .NET applications easier.",
		github: "https://github.com/drewjex/ObservableState",
		project_url: "",
		tags: [
			".NET",
			"C#"
		]
	},
	{
		title: "WPF Components",
		description: `While employed at SkyWest, I designed various original WPF components. Two of my favorites include a custom multi-thumb color range-slider and a collapsible datagrid component.`,
		image: '/assets/tech5.jpg',
		shortDescription: "Designed custom UI elements for WPF.",
		github: "https://github.com/drewjex/WPFColorSliderComponent",
		project_url: "",
		tags: [
			"WPF",
			"XAML"
		]
	},
	{
		title: "LineView",
		description: `Built with ASP.NET, Javascript, C#, and SQL Server, this web application allows airplane-mechanics the ability to manage electronic aircraft records. To protect company confidentiality, the full project is unfortunately, unavailable. My role in this project has included consulting and development. Please feel free to ask me more.`,
		image: '/assets/line.jpg',
		shortDescription: "Robust JavaScript and ASP.NET web app.",
		github: "",
		project_url: "",
		tags: [
			"JavaScript",
			"ASP.NET",
			"SQL Server"
		]
	},
	{
		title: "SkyTrack",
		description: `I built several screens and front-end components for this robust Windows desktop application using .NET and WPF. To protect company confidentiality, the full project is unfortunately, unavailable. My role in this project has included consulting and development. Please feel free to ask me more.`,
		image: '/assets/skytrack.jpg',
		shortDescription: ".NET/WPF Windows Desktop Application.",
		github: "",
		project_url: "",
		tags: [
			".NET",
			"WPF"
		]
	},
	{
		title: "The Ryde",
		description: `While employed with BYU, I developed this site in Drupal for The Ryde (a bus service that operates in South Provo). I participated in helping develop and design the front-end components to be responsive and mobile-friendly.`,
		image: '/assets/ryde.jpg',
		shortDescription: "Designed, Developed web application used by The Ryde bus service in Provo, UT.",
		github: "",
		project_url: "http://www.studentmovement.com/",
		tags: [
			"JavaScript"
		]
	},
];

let resumeFile = '/assets/resume.pdf';

let aboutMe = {
	title: "About Me!",
	image: '/assets/me2.JPG',
	description: `I love learning and I love creating. I am passionate about building rich user experiences using the most recent web technologies. I am an avid tennis player and I enjoy being outside. I love music and playing the piano. My family is most important to me.`,
	email: `drewjex28@gmail.com`,
	phone: `385-375-0254`,
	github: "",
	project_url: ""
};

ReactDOM.render(<App projects = {projects} 
    aboutMe={aboutMe}
    resume={resumeFile}
breakPoints={breakPoints}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
