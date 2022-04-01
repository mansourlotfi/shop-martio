import React from "react";

const Home = React.lazy(() => import("pages/home"));
const ProductCategory = React.lazy(() => import("pages/productCategory"));
const ProductCategoryDetailed = React.lazy(
  () => import("pages/productCategoryDetailed")
);
const Cart = React.lazy(() => import("pages/cart"));
const ContactUs = React.lazy(() => import("pages/contact"));
const Profile = React.lazy(() => import("pages/profile"));
const Wishlist = React.lazy(() => import("pages/wishlist"));
const Blog = React.lazy(() => import("pages/blog"));
const BlogPost = React.lazy(() => import("pages/blogPost"));

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
  productCategory: {
    title: "product-category",
    path: "/product-category",
  },

  productCategoryDetailed: {
    title: "product-category-detailed",
    path: "/product-category-detailed",
  },
  cart: {
    title: "cart",
    path: "/cart",
  },
  profile: {
    title: "profile",
    path: "/profile",
  },
  wishlist: {
    title: "wishlist",
    path: "wishlist",
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
  blog: {
    title: "blog",
    path: "/blog",
  },
  ContactUs: {
    title: "ContactUs",
    path: "/contactUs",
  },
  blogPost: {
    title: "blogPost",
    path: "/blogPost",
  },
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

  {
    ...routesName.productCategory,
    isPrivate: false,
    hasMenuField: false,
    element: ProductCategory,
  },

  {
    ...routesName.productCategoryDetailed,
    isPrivate: false,
    hasMenuField: false,
    element: ProductCategoryDetailed,
  },
  {
    ...routesName.cart,
    isPrivate: false,
    hasMenuField: false,
    element: Cart,
  },
  {
    ...routesName.profile,
    isPrivate: false,
    hasMenuField: false,
    element: Profile,
  },
  {
    ...routesName.wishlist,
    isPrivate: false,
    hasMenuField: false,
    element: Wishlist,
  },

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
  {
    ...routesName.blog,
    isPrivate: false,
    hasMenuField: false,
    element: Blog,
  },
  {
    ...routesName.ContactUs,
    isPrivate: false,
    hasMenuField: false,
    element: ContactUs,
  },
  {
    ...routesName.blogPost,
    isPrivate: false,
    hasMenuField: false,
    element: BlogPost,
  },
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
