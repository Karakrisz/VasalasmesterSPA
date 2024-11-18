import { d as useRuntimeConfig } from "../server.mjs";
import "vue";
import { u as useAsyncData } from "./asyncData-bDMPQB53.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
async function fetchPosts() {
  const config = useRuntimeConfig();
  const { data: itemsPost } = await useAsyncData(
    "posts",
    () => $fetch(`${config.public.apiBaseUrl}/json-posts`)
  );
  return itemsPost;
}
function truncateContent(content, maxLength) {
  const textContent = content.replace(/<[^>]*>/g, "");
  if (textContent.length <= maxLength) {
    return textContent;
  }
  return textContent.slice(0, maxLength) + "...";
}
export {
  fetchPosts as f,
  truncateContent as t
};
//# sourceMappingURL=utils-CRtLxz24.js.map
