const axios = require("axios");
const LARK_HOOK_URL = process.env.SAVE_YOU_ASS_BOT_HOOK_URL;

// 提肛提醒
async function postLarkMsg() {

  const card = {
    config: {
      wide_screen_mode: false,
    },
    header: {
      template: "green",
      title: {
        content: "🌼 提肛提醒 🌼",
        tag: "plain_text",
      },
    },
    elements: [
      {
        tag: "div",
        text: {
          content: "<at id=all></at> 全体起立，现在立刻马上提肛 20 次",
          tag: "lark_md",
        },
      },
    ],
  };

  axios.post(LARK_HOOK_URL, {
    msg_type:"interactive", card
  });
}

postLarkMsg();
