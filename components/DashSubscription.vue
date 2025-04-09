<script setup lang="ts">
const notice =
  '由于邮箱过滤机制可能因用户而异，建议不要使用 163、126、yeah 等邮箱。如果您没有收到邮件，请留意垃圾邮件 (spam) 文件夹或垃圾箱。如果仍然没有收到，可联络 [dash@<wbr>atelier-<wbr>anchor.<wbr>com](mailto:dash@atelier-anchor.com) 解决。'
</script>

<template>
  <div id="mc_embed_signup">
    <form
      action="https://atelier-anchor.us20.list-manage.com/subscribe/post?u=1287d6bf4530c7bbdb048e4db&amp;id=62d2899fdf&amp;f_id=003a87e6f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_self"
    >
      <div id="mc_embed_signup_scroll" class="flex items-start gap-4">
        <DashEmailInput
          id="mce-EMAIL"
          name="EMAIL"
          label="Email Address"
          placeholder="email address"
          feedback="should be a valid email address"
          class="w-full max-w-xs"
        />
        <div id="mce-responses" class="hidden">
          <div id="mce-error-response"></div>
          <div id="mce-success-response"></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div class="absolute -left-[5000px]" aria-hidden="true">
          <input type="text" name="b_1287d6bf4530c7bbdb048e4db_62d2899fdf" tabindex="-1" value="" />
        </div>
        <input
          type="submit"
          id="mc-embedded-subscribe"
          name="subscribe"
          value="subscribe"
          class="pt-1 leading-none text-primary"
        />
      </div>
    </form>
    <p class="mt-4 text-xs text-fg/50 before:content-['*_']" v-html="parseMarkdown(notice)"></p>
  </div>
</template>
