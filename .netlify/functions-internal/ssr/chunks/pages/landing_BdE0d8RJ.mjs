import { e as createAstro, f as createComponent, r as renderTemplate, j as renderSlot, i as renderHead, m as maybeRenderHead, k as renderComponent } from '../astro_BtgUKnRf.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                            */
import 'clsx';
/* empty css                            */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Page;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><!-- Bootstrap --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"><script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"><\/script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">', '</head> <body data-bs-theme="dark"> ', " </body></html>"])), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/jon/Career/Software Development/bookface/src/layouts/Page.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="w-100 position-relative align-self-end bg-dark-subtle py-3"> <p class="text-body-secondary m-auto p-0 text-center m-0">
Bookface &copy 2023 - ${currentYear} </p> </footer>`;
}, "/home/jon/Career/Software Development/bookface/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Landing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing;
  const title = "Login | Bookface";
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": title, "}": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="d-flex svh-100 flex-wrap justify-content-center"> <div class="flex-grow-1 d-flex flex-wrap p-sm-4 m-sm-4 p-md-5 m-md-5 m-2 p-2 gap-5 align-content-end mb-5 justify-content-evenly"> <section class="flex-grow-1 align-self-center px-sm-5 px-4" style="max-width: 30rem"> <div class="mx-auto"> <h1 class="display-1 m-0 py-0">Bookface</h1> <h4 class="m-0 p-0">For all your bookface needs</h4> </div> </section> <section class="flex-grow-1 px-4 px-sm-5 mt-0" style="max-width: 30rem"> <form class="form-group mx-auto" id="login"> <div id="errorMsg" class="mb-4 text-center text-danger-emphasis content-visable-hidden" style="height: 1lh">
Invalid username or password
</div> <div class="input-group-horizontal"> <div class="input-group"> <span class="input-group-text"><i class="bi bi-person-fill"></i></span> <div class="form-floating"> <input type="text" class="form-control" id="username" placeholder="username" autocomplete="username" autofocus required> <label for="userName">Username</label> </div> </div> <div class="input-group"> <span class="input-group-text"><i class="bi bi-lock-fill"></i></span> <div class="form-floating"> <input type="password" class="form-control" id="password" placeholder="Password" autocomplete="current-password" required> <label for="password">Password</label> </div> </div> </div> <div class="form-check text-start my-3"> <input class="form-check-input" type="checkbox" id="remember"> <label class="form-check-label" for="remember"> Remember me </label> </div> <button id="loginButton" class="btn btn-primary w-100 py-2" type="submit"> <span id="loginText">Sign In</span> <span id="loadingSpinner" class="spinner-border spinner-border-sm visually-hidden" aria-hidden="true"></span> </button> <a class="d-block mt-4 link-body-emphasis link-underline-opacity-25 link-opacity-50 link-opacity-75-hover link-offset-2 text-center" href="../registration/"> <span>Don't have an account? Create one!</span> </a> </form> </section> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "/home/jon/Career/Software Development/bookface/src/pages/landing.astro", void 0);

const $$file = "/home/jon/Career/Software Development/bookface/src/pages/landing.astro";
const $$url = "/landing";

const landing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Landing,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Page as $, $$Footer as a, landing as l };