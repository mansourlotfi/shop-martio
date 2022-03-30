import React from "react";

const Home = React.lazy(() => import("pages/home"));

interface IRoute {
  title: string;
  path: string;
  isPrivate?: boolean;
  hasMenuField: boolean;
  hasParent?: any[];
  icon?: any;
  element: React.LazyExoticComponent<() => JSX.Element>;
  children?: IRoute[];
}

interface IRoutesName {
  [name: string]: {
    title: string;
    path: string;
  };
}

export const routesName: IRoutesName = {
  default: {
    title: "default",
    path: "/",
  },
  // Privacy: {
  //   title: "Privacy",
  //   path: "/privacy",
  // },
  // AboutUs: {
  //   title: "AboutUs",
  //   path: "/aboutUs",
  // },
  // Faqs: {
  //   title: "Faqs",
  //   path: "/faqs",
  // },
  // Blogs: {
  //   title: "Blogs",
  //   path: "/blogs",
  // },
  // ContactUs: {
  //   title: "ContactUs",
  //   path: "/contactUs",
  // },
  // BlogPost: {
  //   title: "ContactUs",
  //   path: "/blogPost",
  // },
  // error403: {
  //   title: "Error 403",
  //   path: "/error-pages/error-403",
  // },
  // error404: {
  //   title: "Error 404",
  //   path: "/404",
  // },
  // login: {
  //   title: "Login/register",
  //   path: "/login",
  // },
};

const routes: IRoute[] = [
  {
    ...routesName.default,
    isPrivate: false,
    hasMenuField: false,
    element: Home,
  },

  // {
  //   ...routesName.Privacy,
  //   isPrivate: false,
  //   hasMenuField: false,
  //   element: Privacy,
  // },
  // {
  //   ...routesName.AboutUs,
  //   isPrivate: false,
  //   hasMenuField: false,
  //   element: AboutUs,
  // },
  // {
  //   ...routesName.Faqs,
  //   isPrivate: false,
  //   hasMenuField: false,
  //   element: Faqs,
  // },
  // {
  //   ...routesName.Blogs,
  //   isPrivate: false,
  //   hasMenuField: false,
  //   element: Blogs,
  // },
  // {
  //   ...routesName.ContactUs,
  //   isPrivate: false,
  //   hasMenuField: false,
  //   element: ContactUs,
  // },
  // {
  //   ...routesName.BlogPost,
  //   isPrivate: false,
  //   hasMenuField: false,
  //   element: BlogPost,
  // },
  //   {
  //     ...routesName.asd,
  //     hasMenuField: true,
  //     hasParent: [""],
  //     children: [
  //       {
  //         ...routesName.asd,
  //         isExact: false,
  //         isPrivate: true,
  //         element: asd,
  //         hasMenuField: true,
  //       },
  //       {
  //         ...routesName.asd,
  //         isExact: false,
  //         isPrivate: true,
  //         element: asd,
  //         hasMenuField: false,
  //       },
  //     ],
  //   },
  // {
  //   ...routesName.error403,
  //   isExact: true,
  //   children: [],
  //   isPrivate: true,
  //   hasMenuField: false,
  //   element: Error403,
  // },
  // {
  //   ...routesName.error404,
  //   isPrivate: false,
  //   hasMenuField: false,
  //   element: Error404,
  // },
  // {
  //   ...routesName.login,
  //   isPrivate: false,
  //   hasMenuField: false,
  //   element: Login,
  // },
];

export { routes };
export type { IRoute };