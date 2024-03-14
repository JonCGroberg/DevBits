import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../astro_BtgUKnRf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Page } from './landing_BdE0d8RJ.mjs';

const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const title = "Feed | Bookface";
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": title }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<nav class="navbar navbar-expand-sm shadow-sm bg-dark-subtle py-0"> <div class="container-fluid px-4" style="max-width: 1200px"> <a class="navbar-brand" href="#">Bookface</a> <button class="navbar-toggler d-lg-none my-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"> <span class="bi bi-list"></span> </button> <div class="collapse navbar-collapse" id="collapsibleNavId"> <div class="navbar-nav w-100 px-5 px-sm-0 justify-content-evenly justify-content-md-start text-center nav-underline gap-1 gap-sm-0"> <a class="nav-link p-3" href="../posts/">Explore</a> <a class="nav-link p-3 active border-primary" href="#">Feed</a> <a class="nav-link p-3" href="../profile/">Profile</a> </div> <div class="nav-item w-fit-content mx-auto py-3 ps-3"> <div class="dropdown"> <a class="dropdown-toggle nav-link" href="#" id="dropdownId" data-bs-toggle="dropdown"><span id="usernameLabel"><i class="bi-person-fill"></i> <span id="loginName"></span> </span></a> <div class="dropdown-menu dropdown-menu-sm-end shadow-sm" aria-labelledby="dropdownId"> <!-- <btn class="dropdown-item btn" href="#"> <i class="bi bi-gear-fill pe-1"></i> <span>Settings</span> </btn> --> <a class="dropdown-item btn" href="#"> <i class="bi bi-person-fill pe-2"></i><span>Profile</span></a> <!-- <btn class="dropdown-item btn" href="#"> <i class="bi bi-people-fill pe-2"></i><span>Friends</span></btn> --> <!-- <btn class="dropdown-item btn" href="#"> <i class="bi bi-heart-fill pe-2"></i> <span>Likes</span> </btn> --> <!-- <btn class="dropdown-item btn" href="#"> <i class="bi bi-bookmark-fill pe-2"></i><span>Saved</span></btn> --> <btn class="dropdown-item btn" id="logoutBtn"> <i class="bi bi-x-circle-fill pe-1"></i> <span>Logout</span> </btn> </div> </div> </div> </div> </div> </nav> <main class="container mt-5" style="max-width: 1200px"> <div class="row align-items-center col-12 mx-auto"> <div id="posts" class="col-12 mx-auto"></div> </div> </main> ` })}`;
}, "/home/jon/Career/Software Development/bookface/src/pages/posts.astro", void 0);

const $$file = "/home/jon/Career/Software Development/bookface/src/pages/posts.astro";
const $$url = "/posts";

export { $$Posts as default, $$file as file, $$url as url };