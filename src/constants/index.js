import {
    FastBolt,
    ToolIcon,
    SecureShield,
    GithubIcon,
    LinkedInIcon,
    Youtube,
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "download",
        title: "Download",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: FastBolt,
        title: "Fast PDF Build",
        content:
            "PDIFY found the fastest way to create PDFs from online images. You just add images and export a PDF within a minute.",
    },
    {
        id: "feature-2",
        icon: SecureShield,
        title: "Secure",
        content:
            "You don't need to upload images to create PDFs online; PDIFY never collects or stores any user data.",
    },
    {
        id: "feature-3",
        icon: ToolIcon,
        title: "Annotation Tools",
        content:
            "The PDIFY Built-in Editor enables users to add comments, highlights, drawings, shapes, images and new pages. It also allows for easy updates and enhancements to image collections before exporting the PDF.",
    },
];

export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: "Report a bug",
                link: "https://github.com/pizzusoft/pdify/issues",
            },
            {
                name: "Github Pizzusoft",
                link: "https://github.com/pizzusoft/pdify/",
            },
            {
                name: "Video Tutorial",
                link: "https://youtu.be/UnWEhw6iVDo",
            },
        ],
    },
];

export const socialMedia = [
    {
        id: "github",
        icon: GithubIcon,
        link: "https://github.com/pizzusoft/pdify/",
    },
    // {
    //     id: "social-media-2",
    //     icon: FacebookIcon,
    //     link: "https://www.facebook.com/shariar.kabir.27",
    // },
    {
        id: "social-media-4",
        icon: LinkedInIcon,
        link: "https://www.linkedin.com/in/md-shariar-kabir/",
    },
    {
        id: "youtube",
        icon: Youtube,
        link: "https://youtu.be/UnWEhw6iVDo",
    },
];

// Privacy and Security
export const privacyAndSecurity = [
    {
        heading: `Information Collection and Use`,
        subHeading: `The Extension is designed to convert images to PDF format. In order to provide this functionality, the Extension may:
        Access images from your local browser or web pages as instructed by you.
        Temporarily process these images to convert them into PDF files.
        We do not collect, store, or transmit any personal information or images beyond what is necessary to provide the conversion functionality. All processing is done locally on your browser.
        `,
        points: [],
    },
    {
        heading: `Data Storage`,
        subHeading: ``,
        points: [
            {
                title: `Local Processing:`,
                des: `All image processing and PDF conversion occur locally on your browser. No image data is transmitted to our servers or any third-party servers.`,
            },
            {
                title: `Temporary Data: `,
                des: `Any data used for the conversion process is temporarily held in your browser’s memory and is discarded immediately after the conversion is complete.`,
            },
        ],
    },
    {
        heading: `Data Sharing`,
        subHeading: `We do not share your data with third parties. Since all processing happens locally on your browser, no image data is uploaded, stored, or shared externally.`,
        points: [],
    },
    {
        heading: `Security Measures`,
        subHeading: `We implement the following security measures to protect your information:`,
        points: [
            {
                title: `Local Processing:`,
                des: `By ensuring all data processing occurs locally, we eliminate the risk of data interception or unauthorized access during transmission.`,
            },
            {
                title: `No Persistent Storage:`,
                des: `We do not store any images or converted PDF files after the conversion process is complete.`,
            },
            {
                title: `Permissions:`,
                des: `The Extension only requests the necessary permissions to access images as instructed by you for the sole purpose of conversion.`,
            },
        ],
    },
    {
        heading: `User Control`,
        subHeading: `You have full control over the images you choose to convert using the Extension. The Extension will only access images you explicitly select and approve for conversion.`,
        points: [],
    },
    {
        heading: `Changes to This Policy`,
        subHeading: `We may update our Privacy and Security Policy from time to time. We will notify you of any changes by posting the new Policy on this page. You are advised to review this Policy periodically for any changes.`,
        points: [],
    },
];

/*
export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];


  // {
  //     title: "Community",
  //     links: [
  //         {
  //             name: "Help Center",
  //             link: "https://www.hoobank.com/help-center/",
  //         },
  //         {
  //             name: "Partners",
  //             link: "https://www.hoobank.com/partners/",
  //         },
  //         {
  //             name: "Suggestions",
  //             link: "https://www.hoobank.com/suggestions/",
  //         },
  //         {
  //             name: "Blog",
  //             link: "https://www.hoobank.com/blog/",
  //         },
  //         {
  //             name: "Newsletters",
  //             link: "https://www.hoobank.com/newsletters/",
  //         },
  //     ],
  // },
  // {
  //     title: "Partner",
  //     links: [
  //         {
  //             name: "Our Partner",
  //             link: "https://www.hoobank.com/our-partner/",
  //         },
  //         {
  //             name: "Become a Partner",
  //             link: "https://www.hoobank.com/become-a-partner/",
  //         },
  //     ],
  // },
*/
