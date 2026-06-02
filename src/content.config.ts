import { defineCollection, z } from 'astro:content';
// 💡 Astro 5.0 正式版標準規格：請認明「斜線 (/)」路徑，徹底解決找不到 loaders 的問題
import { glob } from 'astro/loaders'; 

const storiesCollection = defineCollection({
  // 使用 Astro 5.0 的高效 loader 載入所有 .md 小說檔案
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/stories" }),
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    category: z.string(),
    order: z.number().optional(), // 💡 完美進駐：讓系統認得 order 數字欄位，且舊文章沒寫也不會報錯！
  }),
});

export const collections = {
  'stories': storiesCollection,
};