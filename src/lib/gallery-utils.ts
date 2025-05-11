export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  thumbSrc?: string;
  caption?: string;
  category?: string;
  date?: string;
}

export const eventGalleryImages: GalleryImage[] = [
  // Existing images
  {
    id: 1,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02902.jpg?updatedAt=1743316868447&tr=w-1200,h-900,fo-auto",
    alt: "Panel discussion at the Regional Peace Dialogue",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02902.jpg?updatedAt=1743316868447&tr=w-400,h-300,fo-auto",
    category: "discussion",
  },
  {
    id: 2,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03031.jpg?updatedAt=1743316868270&tr=w-1200,h-900,fo-auto",
    alt: "Attendees participating in a workshop session",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03031.jpg?updatedAt=1743316868270&tr=w-400,h-300,fo-auto",
    category: "workshop",
  },
  {
    id: 3,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03023.jpg?updatedAt=1743316868160&tr=w-1200,h-900,fo-auto",
    alt: "Keynote speech at the Regional Peace Dialogue",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03023.jpg?updatedAt=1743316868160&tr=w-400,h-300,fo-auto",
    category: "keynote",
  },
  {
    id: 4,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02746.jpg?updatedAt=1743317508937&tr=w-1200,h-900,fo-auto",
    alt: "Community representatives discussing conflict resolution",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02746.jpg?updatedAt=1743317508937&tr=w-400,h-300,fo-auto",
    category: "community",
  },
  {
    id: 5,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02926.jpg?updatedAt=1743317508934&tr=w-1200,h-900,fo-auto",
    alt: "Interactive session on peace initiatives",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02926.jpg?updatedAt=1743317508934&tr=w-400,h-300,fo-auto",
    category: "interactive",
  },
  {
    id: 6,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02403.jpg?updatedAt=1743317508583&tr=w-1200,h-900,fo-auto",
    alt: "Delegates from various countries at the dialogue",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02403.jpg?updatedAt=1743317508583&tr=w-400,h-300,fo-auto",
    category: "delegates",
  },
  // New images from Google Photos album
  {
    id: 7,
    src: "https://lh3.googleusercontent.com/pw/ABLVV87xoGnnO-0_GzGdmT1_vQ-FqW3tZuiAx8iR38kbeCbkBPgGK8xf4oXKWxnPYZN9DMQWZ-AK5bx48o6fBUzGLnRuPXkL_ECpJh-5V_ATWNFGnkBcSH-Azh-TgV6qcOnKXJ-HPERO3PV7TPeFEsQI36Z5dw=w1366-h768-s-no-gm",
    alt: "Regional dialogue session with diverse participants",
    thumbSrc: "https://lh3.googleusercontent.com/pw/ABLVV87xoGnnO-0_GzGdmT1_vQ-FqW3tZuiAx8iR38kbeCbkBPgGK8xf4oXKWxnPYZN9DMQWZ-AK5bx48o6fBUzGLnRuPXkL_ECpJh-5V_ATWNFGnkBcSH-Azh-TgV6qcOnKXJ-HPERO3PV7TPeFEsQI36Z5dw=w400-h225-s-no-gm",
    category: "discussion",
  },
  {
    id: 8,
    src: "https://lh3.googleusercontent.com/pw/ABLVV84ITzjDuqdGZ3mjYpOTfr9Hm-rfV2qeUhTpCM6M-YcyR6WVrdQp-Xzu6FIH9NY1G8MnM4WWOJ4lHq9S2WWJzYhV8CPtdVWwH6tWIhFAHv_VIawzEKug94_qkdtZXyRwtKdAx0XS6u0XY1Ow5NLre-D2xQ=w1366-h768-s-no-gm",
    alt: "Panel of experts discussing regional security",
    thumbSrc: "https://lh3.googleusercontent.com/pw/ABLVV84ITzjDuqdGZ3mjYpOTfr9Hm-rfV2qeUhTpCM6M-YcyR6WVrdQp-Xzu6FIH9NY1G8MnM4WWOJ4lHq9S2WWJzYhV8CPtdVWwH6tWIhFAHv_VIawzEKug94_qkdtZXyRwtKdAx0XS6u0XY1Ow5NLre-D2xQ=w400-h225-s-no-gm",
    category: "panel",
  },
  {
    id: 9,
    src: "https://lh3.googleusercontent.com/pw/ABLVV85swZZoUZAFV89yE8JBnHxQxflaIwMYAdnU5g5I0019t21Rt5akJXucmgkhFzO-Avs9KTHtZMCdp7Zt9rYbPGaNX9SqXoSlpSNC2Pz4je6oZTTvXvXbZd_7jlYCDgQr85MV258lM50YJ83VCVU9bVIutg=w1366-h768-s-no-gm",
    alt: "Facilitated group discussion on conflict resolution",
    thumbSrc: "https://lh3.googleusercontent.com/pw/ABLVV85swZZoUZAFV89yE8JBnHxQxflaIwMYAdnU5g5I0019t21Rt5akJXucmgkhFzO-Avs9KTHtZMCdp7Zt9rYbPGaNX9SqXoSlpSNC2Pz4je6oZTTvXvXbZd_7jlYCDgQr85MV258lM50YJ83VCVU9bVIutg=w400-h225-s-no-gm",
    category: "workshop",
  },
  {
    id: 10,
    src: "https://lh3.googleusercontent.com/pw/ABLVV84jwHl1yXJrRvNtRVA6q3BFlLmpCFIvNDSdpofCcenG9PA0G_aOF97Bd9cUWOk54_9E9jzwxS1mQmYw893bq6rTCCE6BSalGn6BdMSoYZytIRKfKvQEkGkYVfUTJCQcr-T3K7qPxB3pO6w5cIT0FZ-fCw=w1366-h768-s-no-gm",
    alt: "Networking session between delegates",
    thumbSrc: "https://lh3.googleusercontent.com/pw/ABLVV84jwHl1yXJrRvNtRVA6q3BFlLmpCFIvNDSdpofCcenG9PA0G_aOF97Bd9cUWOk54_9E9jzwxS1mQmYw893bq6rTCCE6BSalGn6BdMSoYZytIRKfKvQEkGkYVfUTJCQcr-T3K7qPxB3pO6w5cIT0FZ-fCw=w400-h225-s-no-gm",
    category: "networking",
  },
  {
    id: 11,
    src: "https://lh3.googleusercontent.com/pw/ABLVV84xSHgXRYzSb42g1z4lHoIEV5vCcwzO2rZ_gNYjjF1h9Va2Sl2pTDGwe9vt8z9LQk3pcc1rCkPVTQd3BR7xvpFmrm8xVnJPdcUA4vDOyYh-vH4e4-XnmFq2y3HGQ9O956u0V4vX23pLbGYjiGYqPymRVQ=w1366-h768-s-no-gm",
    alt: "Regional leaders discussing peace initiatives",
    thumbSrc: "https://lh3.googleusercontent.com/pw/ABLVV84xSHgXRYzSb42g1z4lHoIEV5vCcwzO2rZ_gNYjjF1h9Va2Sl2pTDGwe9vt8z9LQk3pcc1rCkPVTQd3BR7xvpFmrm8xVnJPdcUA4vDOyYh-vH4e4-XnmFq2y3HGQ9O956u0V4vX23pLbGYjiGYqPymRVQ=w400-h225-s-no-gm",
    category: "leaders",
  },
  {
    id: 12,
    src: "https://lh3.googleusercontent.com/pw/ABLVV856ecF2an4JkUR2L2NGTSbP9cGQOkSkJFc5dy1qTpi4qNIMD5uWjO9pvdBO8HLQeQW1rKVqNQU8p9xrIT-BQ2dmtCGYCts_BXmDaWCaJ35QnOQFagzojdiQr-STPL3tN5CqRFqD9AVeF0jcyq0MsYSd4w=w1366-h768-s-no-gm",
    alt: "Audience attentively listening to keynote address",
    thumbSrc: "https://lh3.googleusercontent.com/pw/ABLVV856ecF2an4JkUR2L2NGTSbP9cGQOkSkJFc5dy1qTpi4qNIMD5uWjO9pvdBO8HLQeQW1rKVqNQU8p9xrIT-BQ2dmtCGYCts_BXmDaWCaJ35QnOQFagzojdiQr-STPL3tN5CqRFqD9AVeF0jcyq0MsYSd4w=w400-h225-s-no-gm",
    category: "audience",
  },
  {
    id: 13,
    src: "https://lh3.googleusercontent.com/pw/ABLVV867EvbvQ6kf_lCqaz6rrC0PAuAJ8uCto6tMX9whL4fUXVlY22pBUEFuWY3QfHK5wcNbmuxroCngkFYhdofbLKhi4b4MHxbifOn5RtggxqumSgxnoLJuIy6Q8EFRvv0jsAWzpX5YsF-SQ19wxtTnkt_ylQ=w1366-h768-s-no-gm",
    alt: "Collaborative group work on regional strategies",
    thumbSrc: "https://lh3.googleusercontent.com/pw/ABLVV867EvbvQ6kf_lCqaz6rrC0PAuAJ8uCto6tMX9whL4fUXVlY22pBUEFuWY3QfHK5wcNbmuxroCngkFYhdofbLKhi4b4MHxbifOn5RtggxqumSgxnoLJuIy6Q8EFRvv0jsAWzpX5YsF-SQ19wxtTnkt_ylQ=w400-h225-s-no-gm",
    category: "collaboration",
  },
  {
    id: 14,
    src: "https://lh3.googleusercontent.com/pw/ABLVV868VcL1wAXUqiuhOlJAhZ-0_mWq7sFdnlccgVi5N9-zBL2Mc2PxV_1HGGg7rUnt5RTM7XBu5_yVYl73y3kR__M5xui-qiGrtH3WGvdTNOK9tSpPA7qLoVt9VgScMGdsnls_JG3IeSNeHy45xQZqqiZzQQ=w1366-h768-s-no-gm",
    alt: "Youth representatives sharing perspectives on peace",
    thumbSrc: "https://lh3.googleusercontent.com/pw/ABLVV868VcL1wAXUqiuhOlJAhZ-0_mWq7sFdnlccgVi5N9-zBL2Mc2PxV_1HGGg7rUnt5RTM7XBu5_yVYl73y3kR__M5xui-qiGrtH3WGvdTNOK9tSpPA7qLoVt9VgScMGdsnls_JG3IeSNeHy45xQZqqiZzQQ=w400-h225-s-no-gm",
    category: "youth",
  },
  {
    id: 15,
    src: "https://lh3.googleusercontent.com/pw/ABLVV86nxCDeYfu9e1k-VWmF-1m2ZBh1ydLyRgT0bfmmfJrKbQnJbLrDYPEM6tJsyVcEs7HsTzSSF4zSMIWFc85xAsTQRIAKQIWIDr_3698MXEDY3-Yxo3FlwBUAKakDp1AWY-OnLXuDibr4baUcfRF98LVFJA=w1366-h768-s-no-gm",
    alt: "Documentation and media coverage of the event",
    thumbSrc: "https://lh3.googleusercontent.com/pw/ABLVV86nxCDeYfu9e1k-VWmF-1m2ZBh1ydLyRgT0bfmmfJrKbQnJbLrDYPEM6tJsyVcEs7HsTzSSF4zSMIWFc85xAsTQRIAKQIWIDr_3698MXEDY3-Yxo3FlwBUAKakDp1AWY-OnLXuDibr4baUcfRF98LVFJA=w400-h225-s-no-gm",
    category: "media",
  },
];

export const getImageCategories = () => {
  const categories = eventGalleryImages.map(img => img.category);
  return Array.from(new Set(categories)).filter(Boolean) as string[];
};
