export const SITE_TITLE = "Dou Papers";
export const SITE_DESCRIPTION =
	"Work papers related to future/on-going projects around Dou, inc.";
export const SITE_URL = "https://papers.dousec.org";
export const COPYRIGHT_NAME = "Dou";

export const PAGE_COPY = {
	papers: {
		title: "Posts",
		description: "Browse all posts sorted by date.",
		descriptionItalic: false,
	},
	collections: {
		title: "Collections",
		description: "Read related posts by series.",
		descriptionItalic: false,
	},
	tags: {
		title: "Tags",
		description: "Browse all posts by topic.",
		descriptionItalic: false,
	},
	years: {
		title: "Archive",
		description: "Browse all posts by publish date.",
		descriptionItalic: false,
	},
	members: {
		title: "Members",
		description: "Dou's member sites worth visiting.",
		descriptionItalic: false,
	},
	about: {
		title: "About",
		description: "To do.",
		descriptionItalic: false,
	},
} as const;

export const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/papers", label: "Posts" },
	{ href: "/members", label: "Members" },
	{ href: "/about", label: "About" },
] as const;

export const SOCIAL_LINKS = [
	{
		label: "GitHub",
		href: "https://github.com/dousec",
		icon: "social/github",
	},
] as const;

export const HOME = {
	avatar: {
		src: "/dousec.png",
		alt: "DouSec",
	},
	motto: "AI lovers, specially Leonardo Urbina. The name... is the Prince Vibecoder.",
	description: "Check discussions if u want to be more updated.",
	recentPostsLimit: 6,
} as const;
export const SEARCH = {
	enabled: true,
	maxResults: 8,
} as const;

export { MEMBER_LINKS } from "./config/member-links";

export const COMMENTS = {
	enabled: false,
	provider: "giscus",
	repo: "owner/repository",
	repoId: "",
	category: "Announcements",
	categoryId: "",
	mapping: "pathname",
	themeLight: "light_protanopia",
	themeDark: "transparent_dark",
	lang: "en",
} as const;
